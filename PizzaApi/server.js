import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json())

app.get('/', (req, res) =>{
res.send('Welcome to the Pizza API');

})


mongoose.connect(process.env.MONG_URI)
.then(() => {
    const port = process.env.PORT || 5000
    app.listenerCount(PORT, ()=>console.log(`Server is running on port ${port}`));
})
.catch(err => console.error(`DB connection error:`, err))