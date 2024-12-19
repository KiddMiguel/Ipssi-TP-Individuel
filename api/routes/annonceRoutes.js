const express = require('express');
const router = express.Router();
const annonceController = require('../controllers/annonceController');
const authMiddleware = require('../middlewares/authMiddleware');
// ----------------- CRUD ROUTES ----------------- //
router.post('/create',authMiddleware, annonceController.createAnnonce);
router.get('/:id',authMiddleware, annonceController.getAnnonceById);
router.put('/:id', authMiddleware, annonceController.updateAnnonce);
router.delete('/:id',authMiddleware,  annonceController.deleteAnnonce);
router.get('/annonces/me', authMiddleware, annonceController.getUserAnnoncesByToken);

// ----------------- ANNONCES ROUTES ----------------- //
router.get('/', annonceController.getAllAnnonces);

module.exports = router;
