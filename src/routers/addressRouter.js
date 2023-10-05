const express = require('express');
const { verifyToken } = require('../../middlewares');
const { addressController } = require('../controllers');
const router = express.Router();

router.get('/', verifyToken, addressController.getAddressController);
router.get(
  '/all',
  verifyToken,
  addressController.getCustomerAllAddressController,
);
router.post('/', verifyToken, addressController.createAddressController);
//router.patch('/delete', verifyToken)
router.get(
  '/default',
  verifyToken,
  addressController.getdefaultaddressController,
);

router.delete('/', verifyToken, addressController.deleteOrderAddressController);

module.exports = router;
