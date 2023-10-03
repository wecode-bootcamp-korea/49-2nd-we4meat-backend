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
  getPaymentService,
  chargeWalletService,
  updateBalanceService,
} = require('./paymentService');

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
  paymentService: {
    getPaymentService,
    chargeWalletService,
    updateBalanceService,
  },
};
