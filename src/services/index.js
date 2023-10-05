const {
  createUserService,
  dupliCheckEmailService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
} = require('./userService');

const {
  listProductsService,
  productDetailService,
} = require('./productService');

const {
  getReviewService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
} = require('./reviewService');

const {
  addItemService,
  getCartService,
  updateCartService,
} = require('./cartService');

const {
  createOrderService,
  getOrderListService,
  getOrderDetailService,
  cancelOrdersService,
} = require('./orderService');

const {
  createOrderService,
  getOrderListService,
  getOrderDetailService,
  cancelOrdersService,
} = require('./orderService');

const {
  getOrderAddressService,
  deleteOrderAddressService,
  createOrderAddressService,
  getCustomerAllAddressService,
  getdefaultaddressService,
} = require('./addressService');

module.exports = {
  userService: {
    createUserService,
    dupliCheckEmailService,
    getVerificationCodeService,
    setNewPasswordService,
    loginService,
  },
  productService: {
    listProductsService,
    productDetailService,
  },
  reviewService: {
    getReviewService,
    createReviewService,
    updateReviewService,
    deleteReviewService,
  },
  cartService: {
    addItemService,
    getCartService,
    updateCartService,
  },
  orderService: {
    createOrderService,
    getOrderListService,
    getOrderDetailService,
    cancelOrdersService,
  },
  addressService: {
    getOrderAddressService,
    deleteOrderAddressService,
    createOrderAddressService,
    getCustomerAllAddressService,
    getdefaultaddressService,
  },
};
