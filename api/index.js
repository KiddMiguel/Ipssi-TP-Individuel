require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
// const errorMiddleware = require('./middlewares/errorMiddleware');
const { port } = require('./config/appConfig');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);

// Middleware global pour la gestion des erreurs
// app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
