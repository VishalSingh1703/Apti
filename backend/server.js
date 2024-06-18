// server.js

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('Apti');

        app.get('/questions/:path', async (req, res) => {
            const path = req.params.path;
            const collection = database.collection(path); // Assuming collection name is based on path
            const questions = await collection.find({}).toArray();
            res.json(questions);
        });

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

run().catch(console.dir);

