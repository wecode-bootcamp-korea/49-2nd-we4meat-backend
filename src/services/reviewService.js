const { reviewDao } = require('../models');
const { getReviewDao, createReviewDao, updateReviewDao, deleteReviewDao } = reviewDao;

const getReviewService = async (productId) => {
  return getReviewDao(productId);
};
const createReviewService = async (userId, productId, title, body, imgUrl) => {
  createReviewDao(userId, productId, title, body, imgUrl);
  return 'REVIEW_CREATED';
};
const updateReviewService = async (userId, productId, title, body, imgUrl) => {
  updateReviewDao(userId, productId, title, body, imgUrl);
  return 'REVIEW_UPDATED';
};
const deleteReviewService = async (userId, reviewId) => {
  deleteReviewDao(userId, reviewId);
  return 'REVIEW_DELETED';
};

module.exports = {
  getReviewService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
};