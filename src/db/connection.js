const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const URI = process.env.MONGO_URI_ATLAS;

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const connectDB = async () => {
    try {
        await client.connect()
        return client.db('my-data-base-mongo-atlas');
    } catch (e) {
        console.log(e)
    }
}

module.exports = connectDB;