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

function getBetaUserByToken(token) {
    const cursor = userCollection.findOne({ token: token, beta: true });
    return cursor;
    // const user = userCollection.findOne({ token: token });
    // const serializedUser = user.map(user => ({
    //     ...user,
    //     _id: user._id.toString() // Convert ObjectId to string
    // }));
    // if (serializedUser.beta == true) {
    //     return user;
    // }
    // else {
    //     return null;
    // }
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

async function createCountryDanceMove(move_name, pos_start, pos_end, description, type, difficulty) {
    const countryDanceMove = {
        move_name: move_name,
        pos_start: pos_start,
        pos_end: pos_end,
        description: description,
        type: type,
        difficulty: difficulty,
    };

    await countryMoveCollection.insertOne(countryDanceMove);

    return countryDanceMove;
}

async function createCountryDancePosition(position_name, description) {
    const countryDancePosition = {
        position_name: position_name,
        description: description,
    };
    await countryPositionCollection.insertOne(countryDancePosition);

    return countryDancePosition;
}

async function getCountryDancePositions() {
    const cursor = countryPositionCollection.find({}, { 'position_name': 1, 'description': 1 });
    const data = await cursor.toArray();

    const serializedData = data.map(doc => ({
        ...doc,
        _id: doc._id.toString() // Convert ObjectId to string
    }));

    return serializedData;
}

async function getCountryDanceMoves() {
    // move_name, pos_start, pos_end, description
    const cursor = countryMoveCollection.find({}, { 'move_name': 1, 'pos_start': 1, 'pos_end': 1, 'description': 1, 'type': 1, 'difficulty': 1 });
    const data = await cursor.toArray();

    const serializedData = data.map(doc => ({
        ...doc,
        _id: doc._id.toString() // Convert ObjectId to string
    }));

    return serializedData;
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    createCountryDanceMove,
    createCountryDancePosition,
    getCountryDancePositions,
    getCountryDanceMoves,
    getBetaUserByToken,
};
