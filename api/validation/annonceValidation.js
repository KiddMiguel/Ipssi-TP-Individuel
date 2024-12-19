const Joi = require('joi');

const annonceSchema = Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
        'string.base': 'Le titre doit être une chaîne de caractères.',
        'string.empty': 'Le titre est obligatoire.',
        'string.min': 'Le titre doit comporter au moins 3 caractères.',
        'string.max': 'Le titre ne peut pas dépasser 100 caractères.',
        'any.required': 'Le titre est obligatoire.'
    }),
    description: Joi.string().min(2).max(1000).required().messages({
        'string.base': 'La description doit être une chaîne de caractères.',
        'string.empty': 'La description est obligatoire.',
        'string.min': 'La description doit comporter au moins 2 caractères.',
        'string.max': 'La description ne peut pas dépasser 1000 caractères.',
        'any.required': 'La description est obligatoire.'
    }),
    price: Joi.number().positive().required().messages({
        'number.base': 'Le prix doit être un nombre.',
        'number.positive': 'Le prix doit être positif.',
        'any.required': 'Le prix est obligatoire.'
    }),
    category: Joi.string().required().messages({
        'string.base': 'La catégorie doit être une chaîne de caractères.',
        'string.empty': 'La catégorie est obligatoire.',
        'any.required': 'La catégorie est obligatoire.'
    }),
    user: Joi.string().required().messages({
        'string.base': 'L\'utilisateur doit être une chaîne de caractères.',
        'string.empty': 'L\'utilisateur est obligatoire.',
        'any.required': 'L\'utilisateur est obligatoire.'
    }),
});

const updateAnnonceSchema = Joi.object({
    title: Joi.string().min(3).max(100).messages({
        'string.base': 'Le titre doit être une chaîne de caractères.',
        'string.min': 'Le titre doit comporter au moins 3 caractères.',
        'string.max': 'Le titre ne peut pas dépasser 100 caractères.'
    }),
    description: Joi.string().min(10).max(1000).messages({
        'string.base': 'La description doit être une chaîne de caractères.',
        'string.min': 'La description doit comporter au moins 10 caractères.',
        'string.max': 'La description ne peut pas dépasser 1000 caractères.'
    }),
    price: Joi.number().positive().messages({
        'number.base': 'Le prix doit être un nombre.',
        'number.positive': 'Le prix doit être positif.'
    }),
    category: Joi.string().messages({
        'string.base': 'La catégorie doit être une chaîne de caractères.'
    }),
    user: Joi.string().messages({
        'string.base': 'L\'utilisateur doit être une chaîne de caractères.'
    }),
});

function validateAnnonce(data, context = 'create') {
    const schema = context === 'update' ? updateAnnonceSchema : annonceSchema;

    if (Array.isArray(data)) {
        const errors = data.map((annonce, index) => {
            const { error } = schema.validate(annonce, { abortEarly: false });
            return error
                ? error.details.map(err => ({
                    annonceIndex: index,
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

module.exports = { validateAnnonce };
