const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/appConfig');

const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Token manquant dans l\'en-tête Authorization' });
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Accès refusé. Token non fourni.' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded; // Attache les informations de l'utilisateur
        next();
    } catch (err) {
        res.status(403).json({ error: 'Token invalide' });
    }
};

module.exports = authMiddleware;
