const { orderService } = require('../services');
// const { throwError } = require('../../utils');
// const { RelationQueryBuilder } = require('typeorm');

//주문하기
const getOrdersController = async (req, res) => {
  const userId = req.user.id;

  const getOrdersController = await orderService.getOrdersService(userId);
  res.status(200).json({ getOrdersController });
};

//주문정보 불러오기
const addToOrdersController = async (req, res) => {
  const userId = req.user.id;
  const { totalPrice } = req.body;

  await orderService.addToOrdersService(userId, totalPrice);
  res.status(201).json({ message: 'Successfully_Ordered' });
};

//주문취소
const cancelOrdersController = async (req, res) => {
  const userId = req.user.id;
  const { orderId, totalPrice } = req.body;

  await orderService.cancelOrdersService(userId, orderId, totalPrice);
  res.status(200).json({ message: 'Successfully_Canceled' });
};

module.exports = {
  getOrdersController,
  addToOrdersController,
  cancelOrdersController,
};