import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json())

app.get('/', (req, res =>{
res.send('Welcome to the Pizza API');

}))