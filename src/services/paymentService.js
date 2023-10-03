const { throwError } = require('../../utils');
const { paymentService } = require('../services');
const { createPaymentService, updatePaymentService, deletePaymentService } = paymentService;

const getPaymentController = async (req, res, next) => {
    return
}

const createPaymentController = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { body, productId } = req.body;
        if (!body) throwError(400, 'NO_COMMENT');
        return res.status(201).json(await createPaymentService(id, { body, productId }))
    } catch (err) {
        console.error(err);
        next(err);
    }
};

const updatePaymentController = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { body, reviewId } = req.body;
        if (!body || !reviewId) throwError(400, 'KEY_ERROR');
        return res.status(201).json({message : await updatePaymentService(id, req.body)})
    } catch (err) {
        console.error(err);
        next(err);
    }
};

const deletePaymentController = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { reviewId } = req.body;
        if (!reviewId) throwError(400, 'KEY_ERROR');
        return res.status(200).json({ message : await deletePaymentService(id, reviewId)})
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports = {
    getPaymentController,
    createPaymentController,
    updatePaymentController,
    deletePaymentController,
};
