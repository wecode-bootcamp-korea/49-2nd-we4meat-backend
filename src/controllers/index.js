const {
  signUpController,
  getVerificationCodeController,
  setNewPasswordController,
  loginController,
  dupliCheckController,
} = require('./userController');
const {
  listProductController,
  productDetailController,
} = require('./productController');
const {
  getReviewController,
  createReviewController,
  updateReviewController,
  deleteReviewController,
} = require('./reviewController');
const {
  addItemController,
  getCartController,
  updateCartController,
} = require('./cartController');
const {
  createOrderController,
  getOrderListController,
  getOrderDetailController,
  cancelOrdersController,
} = require('./orderController');
const {
  checkAmountController,
  walletDeductionController,
  walletRechargeController,
} = require('./paymentController')

const {
  getAddressController,
  getCustomerAllAddressController,
  createAddressController,
  getdefaultaddressController,
  deleteOrderAddressController,
} = require('./addressController');

module.exports = {
  userController: {
    signUpController,
    getVerificationCodeController,
    setNewPasswordController,
    loginController,
    dupliCheckController,
  },
  productController: {
    listProductController,
    productDetailController,
  },
  reviewController: {
    getReviewController,
    createReviewController,
    updateReviewController,
    deleteReviewController,
  },
  cartController: {
    addItemController,
    getCartController,
    updateCartController,
  },
  orderController: {
    createOrderController,
    getOrderListController,
    getOrderDetailController,
    cancelOrdersController,
  },
  addressController: {
    getAddressController,
    getCustomerAllAddressController,
    createAddressController,
    getdefaultaddressController,
    deleteOrderAddressController,
  },
  paymentController: {
    checkAmountController,
    walletDeductionController,
    walletRechargeController,
  }
};
