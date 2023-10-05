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
  getOrdersController,
  addToOrdersController,
  cancelOrdersController,
} = require('./orderController');

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
  orderController: {
    getOrdersController,
    addToOrdersController,
    cancelOrdersController,
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
  addressController: {
    getAddressController,
    getCustomerAllAddressController,
    createAddressController,
    getdefaultaddressController,
    deleteOrderAddressController,
  },
};
