const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/appConfig');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Accès refusé' });

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ error: 'Token invalide' });
    }
};

module.exports = authMiddleware;
