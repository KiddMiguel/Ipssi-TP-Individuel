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

    async getUserAnnonces(userId) {
        const user = await User.findById(userId);
        if (!user) return null;
        return await user.getAnnonces();
    }   

}

module.exports = new AnnonceService();