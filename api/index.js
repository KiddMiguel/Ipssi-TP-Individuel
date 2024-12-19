require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const annonceRoutes = require('./routes/annonceRoutes');
// const errorMiddleware = require('./middlewares/errorMiddleware');
const { port } = require('./config/appConfig');

const app = express();

// Gérer le CORS
const cors = require('cors');
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/annonces', annonceRoutes);

// Middleware global pour la gestion des erreurs
// app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
