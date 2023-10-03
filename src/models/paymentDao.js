const { dataSource } = require('./dataSource');

const getPaymentDao = async (userId, amount) => {
  await dataSource.query(
    `
    // SELECT credit FROM customer_wallets WHERE customer_id = ? & id = ?
    `,
    [userId, amount],
  );
};

const updatePaymentDao = async (userId, amount) => {
  await dataSource.query(
    `
    // UPDATE customer_wallets SET credit = ? WHERE customer_id = ? AND id = ?
    `,
    [amount, userId],
  );
};

module.exports = {
  getPaymentDao,
  updatePaymentDao,
};
