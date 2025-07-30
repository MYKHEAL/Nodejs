import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/auth.js';

dotenv.config();

const app = express();
app.use(express.json())
app.use('/api/auth', router);

app.get('/', (req, res) =>{
res.send('Welcome to the Pizza API');

})


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    const port = process.env.PORT || 5000
    app.listen(port, ()=>console.log(`Server is running on port ${port}`));
})
.catch(err => console.error(`DB connection error:`, err))