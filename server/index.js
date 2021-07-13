import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());
//localhost:5000/posts


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.tqbny.mongodb.net/moments?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);