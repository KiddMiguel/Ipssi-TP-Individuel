const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

// ------------------- Routes pour les utilisateurs ------------------- //

// Route pour créer un utilisateur
// router.post('/',  userController.createUser);

// Routes protégées par le middleware d'authentification
// router.get('/:id', authMiddleware, userController.getUserById);

// Routes protégées par le middleware d'authentification
router.put('/:id', authMiddleware, userController.updateUser);

// Routes protégées par le middleware d'authentification
router.delete('/:id', authMiddleware, userController.deleteUser);

// Route pour modifier le mot de passe de l'utilisateur
router.put('/change-password/:id', authMiddleware, userController.changePassword);

// Route pour se connecter
router.post('/login', userController.login);

// Route pour créer un utilisateur
router.post('/register', userController.register);

// Récupérer l'utilisateur avec son token
router.get('/me', authMiddleware, userController.getUserByToken);

// ------------------- Routes pour les administrateurs ------------------- //

// Routes ADMIN
router.post('/admin/created-user', authMiddleware, isAdmin,  userController.createUser);

// Routes ADMIN 
router.get('/', authMiddleware,isAdmin, userController.getAllUsers);

module.exports = router;
