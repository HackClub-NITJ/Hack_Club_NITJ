const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config({ path: "./config.env" });

require('./db/conn.js');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//? model
const User = require('./model/userSchema.js');
const Workshop = require('./model/workshopSchema.js');

const port = process.env.PORT || 4000;

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
});

app.get('/workshop', async (req, res) => {
    try {
        const workshops = await Workshop.find();
        res.status(200).json(workshops);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server Running At Port ${port}`);
});
