const express = require('express');
const readline = require('readline');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('Apti');

        app.get('/questions/:path', async (req, res) => {
            const path = req.params.path;
            const collection = database.collection(path);
            console.log(path);
            const questions = await collection.find({}).toArray();
            res.json(questions);
        });

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

        rl.close();
    } catch (error) {
        console.error(error);
    }
}

run().catch(console.dir);
