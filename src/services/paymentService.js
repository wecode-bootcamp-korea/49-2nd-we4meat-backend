const { paymentDao } = require('../../src/models');
const { getPaymentDao, updatePaymentDao } = paymentDao;

const getPaymentService = async (userId) => {
  getPaymentDao(userId);
  return 'BALANCE_RECEIVED';
};

const chargeWalletService = async (userId, amount) => {
  // 여기에 기존 금액을 불러서, 충전 하는 로직 작성해야 함
    updatePaymentDao(userId, amount);
  return 'WALLET_CHARGED';
};
const updateBalanceService = async (userId, amount) => {
    // 여기에 기존 금액을 불러서
    // 프론트에서 전달하는 금액을 차감한 뒤 업데이트 하는 로직 작성해야 함
  updatePaymentDao(userId, amount);
  return 'BALANCE_UPDATED';
};

module.exports = {
  getPaymentService,
  chargeWalletService,
  updateBalanceService,
};
