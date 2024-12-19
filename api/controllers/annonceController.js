const annonceService = require('../services/annonceService');
const { validateAnnonce } = require('../validation/annonceValidation');
const { successResponse, errorResponse } = require('../utils/responseHandler');

class AnnonceController {
    // ----------------- CRUD OPERATIONS ----------------- //
    async createAnnonce(req, res) {
        const { isValid, errors, value } = validateAnnonce(req.body, 'create');

        if (!isValid) {
            // Pour les tableaux, afficher les erreurs annonce par annonce
            if (Array.isArray(req.body)) {
                const errorMessages = errors.map((err, index) => `Annonce ${index + 1}: ${err.message}`).join("; ");
                return errorResponse(res, errorMessages, 400);
            } else {
                // Pour une seule annonce
                const errorMessages = errors.map(err => `${err.field}: ${err.message}`).join(", ");
                return errorResponse(res, errorMessages, 400);
            }
        }

        try {
            if (Array.isArray(value)) {
                const annonces = await Promise.all(value.map(annonce => annonceService.createAnnonce(annonce)));
                return successResponse(res, annonces, "Annonces créées avec succès");
            } else {
                const annonce = await annonceService.createAnnonce(value);
                return successResponse(res, annonce, "Annonce créée avec succès");
            }
        } catch (err) {
            return errorResponse(res, err.message, 500);
        }
    }

    async getAnnonceById(req, res) {
        try {
            const annonce = await annonceService.getAnnonceById(req.params.id);
            if (!annonce) return errorResponse(res, "Annonce non trouvée", 404);
            successResponse(res, annonce);
        } catch (err) {
            errorResponse(res, err.message);
        }
    }

    async updateAnnonce(req, res) {
        const { isValid, errors, value } = validateAnnonce(req.body, 'update');

        if (!isValid) {
            const errorMessages = errors.map(err => `${err.field}: ${err.message}`).join(", ");
            return errorResponse(res, errorMessages, 400);
        }

        try {
            const annonce = await annonceService.updateAnnonce(req.params.id, value);
            if (!annonce) return errorResponse(res, "Annonce non trouvée", 404);
            successResponse(res, annonce, "Annonce mise à jour avec succès");
        } catch (err) {
            errorResponse(res, err.message);
        }
    }

    async deleteAnnonce(req, res) {
        try {
            const annonce = await annonceService.deleteAnnonce(req.params.id);
            if (!annonce) return errorResponse(res, "Annonce non trouvée", 404);
            successResponse(res, null, "Annonce supprimée avec succès");
        } catch (err) {
            errorResponse(res, err.message);
        }
    }

    // ----------------- ANNONCES OPERATIONS ----------------- //
    async getAllAnnonces(req, res) {
        try {
            const annonces = await annonceService.getAllAnnonces();
            successResponse(res, annonces);
        } catch (err) {
            errorResponse(res, err.message);
        }
    }

    async getUserAnnonces(req, res) {
        try {
            const annonces = await annonceService.getUserAnnonces(req.params.id);
            successResponse(res, annonces);
        } catch (err) {
            errorResponse(res, err.message);
        }
    }
}

module.exports = new AnnonceController();