const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function testConnection() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('Connection failed:', error);
    } finally {
        await client.close();
    }
}

testConnection();
