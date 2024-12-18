const { jwtSecret, jwtExpiresIn } = require('../config/appConfig');
const User = require('../models/User');
const { hashPassword } = require('../utils/hashPassword');
const jwt = require('jsonwebtoken');

class UserService {
    async createUser(data) {
        if (Array.isArray(data)) {
            for (let user of data) {
                user.password = await hashPassword(user.password);
            }
            return await User.insertMany(data);
        } else {
            data.password = await hashPassword(data.password);
            const user = new User(data);
            return await user.save();
        }
    }

    async getUserById(id) {
        return await User.findById(id);
    }

    async updateUser(id, data) {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    async login(data) {
        const user = await User.findOne({ email: data.email });
        if (!user) return null;

        const validPassword = await user.isValidPassword(data.password);
        if (!validPassword) return null;

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role
            },
            jwtSecret,
            { expiresIn: jwtExpiresIn }
        );

        return { user, token }; // Retourne l'utilisateur et le token
    }

    async deleteUser(id) {
        return await User.findByIdAndUpdate(id, { deleted_at: new Date(), status: 'inactive' });
    }

    async getAllUsers(filter = {}) {
        return await User.find(filter).where({ deleted_at: null });
    }
}

module.exports = new UserService();
