const userService = require("../services/userService");
const { validateUser } = require("../validation/userValidation");
const { successResponse, errorResponse } = require("../utils/responseHandler");

class UserController {
  // ----------------- CRUD OPERATIONS ----------------- //
  async createUser(req, res) {
    const { isValid, errors, value } = validateUser(req.body);

    if (!isValid) {
        // Pour les tableaux, afficher les erreurs utilisateur par utilisateur
        if (Array.isArray(req.body)) {
            const errorMessages = errors.map((err, index) => `Utilisateur ${index + 1}: ${err.message}`).join("; ");
            return errorResponse(res, errorMessages, 400);
        } else {
            // Pour un seul utilisateur
            const errorMessages = errors.map(err => `${err.field}: ${err.message}`).join(", ");
            return errorResponse(res, errorMessages, 400);
        }
    }

    try {
        if (Array.isArray(value)) {
            const users = await Promise.all(
                value.map(user => userService.createUser(user))
            );
            return successResponse(res, users, "Utilisateurs créés avec succès");
        } else {
            const user = await userService.createUser(value);
            return successResponse(res, user, "Utilisateur créé avec succès");
        }
    } catch (err) {
        return errorResponse(res, err.message, 500);
    }
}


  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) return errorResponse(res, "User not found", 404);
      successResponse(res, user);
    } catch (err) {
      errorResponse(res, err.message);
    }
  }

  async updateUser(req, res) {
    const { error } = validateUser(req.body);
    if (error)
      return errorResponse(
        res,
        error.details.map((err) => err.message).join(", ")
      );

    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user) return errorResponse(res, "User not found", 404);
      successResponse(res, user, "User updated successfully");
    } catch (err) {
      errorResponse(res, err.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userService.deleteUser(req.params.id);
      if (!user) return errorResponse(res, "User not found", 404);
      successResponse(res, null, "User deleted successfully");
    } catch (err) {
      errorResponse(res, err.message);
    }
  }

  // ----------------- USERS OPERATIONS ----------------- //
  async login(req, res) {
    try {
        const { isValid, errors } = validateUser(req.body, "login");

        if (!isValid) {
            const errorMessages = errors.map(err => `${err.field}: ${err.message}`).join(", ");
            return errorResponse(res, errorMessages, 400);
        }

        // Tente de connecter l'utilisateur
        const { user, token } = await userService.login(req.body);
        if (!user) {
            return errorResponse(res, "Invalid email or password", 400);
        }

        // Retourne la réponse avec le token et les informations utilisateur
        successResponse(res, {
            message: "User logged in successfully",
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        errorResponse(res, err.message, 500);
    }
}


  async changePassword(req, res) {
    try {
      const user = await userService.changePassword(req.params.id, req.body);
      if (!user) return errorResponse(res, "User not found", 404);
      successResponse(res, null, "Password changed successfully");
    } catch (err) {
      errorResponse(res, err.message);
    }
  }

  // ----------------- ADMIN OPERATIONS ----------------- //

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      successResponse(res, users);
    } catch (err) {
      errorResponse(res, err.message);
    }
  }
}

module.exports = new UserController();
