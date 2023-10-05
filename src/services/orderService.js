const { throwError } = require('../../utils');
const { orderDao, enums } = require('../models');

//주문상세 불러오기
const getOrdersService = async (userId) => {
  const customerOrders = await orderDao.getOrdersDao(userId);
  console.log('Service단', customerOrders);
  if (!customerOrders[0]) {
    const error = new Error('Ordered_Nothing');
    error.statusCode = 400;

    throwError;
  }
  return customerOrders;
};

//주문하기
const addToOrdersService = async (userId, totalPrice) => {
  const customers_Credit = await orderDao.checkCreditDao(userId);
  const customers_Carts = await orderDao.customerCartDao(userId);

  if (customers_Credit < totalPrice || totalPrice < 0) {
    const error = new Error('Not_Enough_Points');
    error.statusCode = 400;

    throwError;
  }
  if (customers_Carts.length == 0) {
    const error = new Error('Order_Nothing');
    error.statusCode = 400;

    throwError;
  }
  return orderDao.MoveCartToOrderDao(userId, totalPrice, customers_Carts);
};
//주문취소하기
const cancelOrdersService = async (userId, orderId, totalPrice) => {
  const orderStatus = await orderDao.checkOrderStatusDao(orderId);

  if (orderStatus == enums.orderStatusEnum.CANCELED) {
    const error = new Error('Already_canceled');
    error.statusCode = 400;

    throwError;
  }

  return await orderDao.cancelOrdersDao(userId, orderId, totalPrice);
};

module.exports = {
  getOrdersService,
  addToOrdersService,
  cancelOrdersService,
};
