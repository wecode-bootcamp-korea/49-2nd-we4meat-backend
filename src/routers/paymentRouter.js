const express = require('express');
const { verifyToken } = require('../../middlewares');
const { paymentController } = require('../controllers');
const {
  getPaymentController,
  updatePaymentController,
} = paymentController;

const router = express.Router();

router.get('/', verifyToken, getPaymentController);
router.post('/', verifyToken, updatePaymentController);

module.exports = router;
