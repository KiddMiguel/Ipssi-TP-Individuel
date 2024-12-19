const Annonce = require('../models/Annonce');
const User = require('../models/User');

class AnnonceService {
    async createAnnonce(data) {
        const annonce = new Annonce(data);
        return await annonce.save();
    }

    async getAnnonceById(id) {
        return await Annonce.findById(id);
    }

    async updateAnnonce(id, data) {
        return await Annonce.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteAnnonce(id) {
        return await Annonce.findByIdAndDelete(id);
    }

    async getAllAnnonces() {
        return await Annonce.find();
    }

    async getAnnoncesByUser(userId) {
        return await Annonce.find({ user: userId });
    }

    async getUserAnnoncesByToken(token) {
        try {
            const decoded = jwt.verify(token, jwtSecret);
            const user = await User.findById(decoded.id);
            if (!user || user.deleted_at) {
                throw new Error('User not found or inactive');
            }
            return await Annonce.find({ user: user._id });
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

module.exports = new AnnonceService();