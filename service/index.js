const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await DB.createUser(req.body.email, req.body.password);

        // Set the cookie
        setAuthCookie(res, user.token);

        res.send({
            id: user._id,
        });
    }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            if (await DB.getBetaUserByToken(user.token)) {
                res.send({ id: user._id, beta: true })
            } else {
                res.send({ id: user._id, beta: false });
            }
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});



apiRouter.get('/country/positions', async (req, res) => {
    const positions = await DB.getCountryDancePositions();
    res.json(positions);
    res.status(200).end();
});

apiRouter.get('/country/moves', async (req, res) => {
    const moves = await DB.getCountryDanceMoves();
    res.json(moves);
    res.status(200).end();
});

// apiRouter.post('/country/positions', (req, res) => {
//     secureApiRouter((req, res,
//         DB.createCountryDancePosition(req.position_name, req.description)
//     ));
// })


// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    const authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});


// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

peerProxy(httpService);

const betaApiRouter = express.Router();
betaApiRouter.use(async (req, res, next) => {
    const authToken = req.cookies[authCookieName];
    const user = await DB.getBetaUserByToken(authToken);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});
apiRouter.use(betaApiRouter);


apiRouter.post('/country/positions', async (req, res) => {
    DB.createCountryDancePosition(req.body.position_name, req.body.desc);
    // const countryDancePosition = await DB.createCountryDancePosition(req.position_name, req.desc);
    res.status(200).end();
});

apiRouter.post('/country/moves', async (req, res) => {
    DB.createCountryDanceMove(req.body.move_name, req.body.pos_start, req.body.pos_end, req.body.description, req.body.type, req.body.difficulty);
    // const countryDancePosition = await DB.createCountryDancePosition(req.position_name, req.desc);
    res.status(200).end();
});