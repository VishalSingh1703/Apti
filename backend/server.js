<<<<<<< HEAD
// server.js

const express = require('express');
=======
const express = require('express');
const readline = require('readline');
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

<<<<<<< HEAD
=======
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
=======
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9

async function run() {
    try {
        await client.connect();
        const database = client.db('Apti');

        app.get('/questions/:path', async (req, res) => {
            const path = req.params.path;
<<<<<<< HEAD
            const collection = database.collection(path); // Assuming collection name is based on path
=======
            const collection = database.collection(path);
            console.log(path);
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
            const questions = await collection.find({}).toArray();
            res.json(questions);
        });

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
<<<<<<< HEAD
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
=======

        rl.close();
    } catch (error) {
        console.error(error);
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
    }
}

run().catch(console.dir);
<<<<<<< HEAD

=======
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
