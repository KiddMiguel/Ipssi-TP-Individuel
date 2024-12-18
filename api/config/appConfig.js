module.exports = {
    port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET || 'supersecret',
    jwtExpiresIn: '7d'
};
