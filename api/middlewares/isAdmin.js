const isAdmin = (req, res, next) => {
    // Assurez-vous que req.user est défini (par exemple, après avoir utilisé un middleware d'authentification)
    if (!req.user) {
        return res.status(401).json({
            status: "error",
            message: "Accès non autorisé. Veuillez vous connecter."
        });
    }

    // Vérifie si le rôle est "admin"
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            status: "error",
            message: "Accès interdit. Vous devez être un administrateur pour accéder à cette ressource."
        });
    }
    next();
};

module.exports = isAdmin;
