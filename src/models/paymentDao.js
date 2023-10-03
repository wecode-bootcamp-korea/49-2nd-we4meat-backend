const { dataSource } = require('./dataSource');

const getPaymentDao = async (userId, productId) => {
  await dataSource.query(
    `
    // SELECT * FROM reviews WHERE customer_id = ? & product_id = ?
    `,
    [userId, productId],
  );
};

const createPaymentDao = async (userId, { review, reviewId }) => {
  await dataSource.query(
    `
    // INSERT INTO reviews (body, customer_id, thread_id) VALUES (?, ?, ?)
    // `,
    [review, userId, reviewId],
  );
};

const updatePaymentDao = async (userId, { review, reviewId }) => {
  await dataSource.query(
    `
    // UPDATE reviews SET review = ? WHERE customer_id = ? AND id = ?
    `,
    [review, userId, reviewId],
  );
};

module.exports = {
  getPaymentDao,
  createPaymentDao,
  updatePaymentDao,
};
