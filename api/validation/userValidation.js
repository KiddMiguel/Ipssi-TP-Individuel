const Joi = require('joi');

// Schéma utilisateur complet pour l'enregistrement
const userSchema = Joi.object({
    first_name: Joi.string().min(2).max(50).required().messages({
        'string.base': 'Le prénom doit être une chaîne de caractères.',
        'string.empty': 'Le prénom est obligatoire.',
        'string.min': 'Le prénom doit comporter au moins 2 caractères.',
        'string.max': 'Le prénom ne peut pas dépasser 50 caractères.',
        'any.required': 'Le prénom est obligatoire.'
    }),
    last_name: Joi.string().min(2).max(50).required().messages({
        'string.base': 'Le nom doit être une chaîne de caractères.',
        'string.empty': 'Le nom est obligatoire.',
        'string.min': 'Le nom doit comporter au moins 2 caractères.',
        'string.max': 'Le nom ne peut pas dépasser 50 caractères.',
        'any.required': 'Le nom est obligatoire.'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'L\'adresse e-mail doit être valide.',
        'string.empty': 'L\'adresse e-mail est obligatoire.',
        'any.required': 'L\'adresse e-mail est obligatoire.'
    }),
    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.empty': 'Le mot de passe est obligatoire.',
            'string.min': 'Le mot de passe doit comporter au moins 6 caractères.',
            'any.required': 'Le mot de passe est obligatoire.'
        }),
    phone_number: Joi.string().pattern(/^\+?[0-9]{7,15}$/).messages({
        'string.pattern.base': 'Le numéro de téléphone doit être valide, avec un préfixe international facultatif.'
    }),
    role: Joi.string().valid('admin', 'user', 'seller').messages({
        'any.only': 'Le rôle doit être l\'un des suivants : admin, user, seller.'
    }),
    status: Joi.string().valid('active', 'inactive', 'banned').messages({
        'any.only': 'Le statut doit être l\'un des suivants : active, inactive, banned.'
    }),
});

// Schéma simplifié pour le login
const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'L\'adresse e-mail doit être valide.',
        'string.empty': 'L\'adresse e-mail est obligatoire.',
        'any.required': 'L\'adresse e-mail est obligatoire.'
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': 'Le mot de passe doit comporter au moins 8 caractères.',
        'string.empty': 'Le mot de passe est obligatoire.',
        'any.required': 'Le mot de passe est obligatoire.'
    }),
});

module.exports = {
    validateUser: (data, context = 'register') => {
        const schema = context === 'login' ? loginSchema : userSchema;

        if (Array.isArray(data)) {
            const errors = data.map((user, index) => {
                const { error } = schema.validate(user, { abortEarly: false });
                return error
                    ? error.details.map(err => ({
                        userIndex: index,
                        field: err.context.key,
                        message: err.message
                    }))
                    : null;
            });

            const allErrors = errors.filter(err => err !== null).flat();
            return {
                isValid: allErrors.length === 0,
                errors: allErrors,
                value: data
            };
        } else {
            const { error, value } = schema.validate(data, { abortEarly: false });
            if (error) {
                return {
                    isValid: false,
                    errors: error.details.map(err => ({
                        field: err.context.key,
                        message: err.message
                    })),
                    value
                };
            }
            return { isValid: true, value };
        }
    }
};
