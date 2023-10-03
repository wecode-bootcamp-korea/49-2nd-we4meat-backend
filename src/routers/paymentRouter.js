const express = require('express');
const { paymentController } = require('../controllers');
const {
  getPaymentController,
//   createReviewController,
  updatePaymentController,
//   deleteReviewController,
} = paymentController;
const { verifyToken } = require('../../middlewares');
const router = express.Router();

router.get('/', getPaymentController);
// router.post('/', verifyToken, createReviewController);
router.post('/', verifyToken, updatePaymentController);
// router.delete('/', verifyToken, deleteReviewController);

module.exports = router;
