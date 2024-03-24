import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import mongodb from 'mongodb'
import mongoose from 'mongoose'
import router from './Routes/PriceAppRouter.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const PORT =process.env.PORT | 4000;


const Mongo_URL = process.env.MongoUrl;

const ConnectDB = async () => {
    try {
        await mongoose.connect(Mongo_URL);
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log(err);
    }
};
ConnectDB();
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

