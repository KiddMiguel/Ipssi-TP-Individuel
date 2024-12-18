const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/your_database_name');
        console.log('Connexion à MongoDB réussie');
    } catch (err) {
        console.error('Erreur de connexion à MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;