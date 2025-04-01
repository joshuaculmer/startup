const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('dancing');
const userCollection = db.collection('user');
const countryMoveCollection = db.collection('country_dance_move');
const countryPositionCollection = db.collection('country_dance_position');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);

    return user;
}

async function createCountryDanceMove(move_name, pos_start, pos_end, description) {
    const countryDanceMove = {
        move_name: move_name,
        pos_start: pos_start,
        pos_end: pos_end,
        description: description,
    };

    await countryMoveCollection.insertOne(countryDanceMove);

    return countryDanceMove;
}

async function createCountryDancePosition(position_name, description) {
    const countryDancePosition = {
        position_name: position_name,
        description: description,
    };

    await countryPositionCollection.insertOne(countryDanceMove);

    return countryDanceMove;
}


module.exports = {
    getUser,
    getUserByToken,
    createUser,
    createCountryDanceMove,
    createCountryDancePosition,
};
