const { throwError } = require('../../utils');
const { paymentService } = require('../services');
const { getPaymentService, chargeWalletService, updateBalanceService } = paymentService;

const getPaymentController = async (req, res, next) => {
    try {
        const { id } = req.user; 
        return res.status(200).json(await getPaymentService(id))
    } catch (err) {
        console.error(err);
        next(err);
    }
    
}

const updatePaymentController = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { amount } = req.body;
        if (!amount || !id) throwError(400, 'KEY_ERROR');
        return res.status(201).json({message : await updatePaymentService(id, amount)})
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports = {
    getPaymentController,
    updatePaymentController,
};
