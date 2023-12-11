
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');


dotenv.config();

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

const connectDB = async () => {
    await client.connect()
    return client.db('task-list');
}


module.exports = connectDB;