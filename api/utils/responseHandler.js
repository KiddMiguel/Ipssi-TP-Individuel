const successResponse = (res, data, message = 'Success') => {
    res.json({ status: 'success', message, data });
};

const errorResponse = (res, message, statusCode = 400) => {
    res.status(statusCode).json({ status: 'error', message });
};

module.exports = { successResponse, errorResponse };
