const { throwError } = require('../../utils');
const { orderDao, enums } = require('../models');
const { orderStatusEnum } = enums;
const {
  customerCartDao,
  MoveCartToOrderDao,
  getOrderListDao,
  getOrderDetailDao,
  checkOrderStatusDao,
  cancelOrdersDao,
} = orderDao;

// 주문 생성 (카트에서 -> 오더로)
const createOrderService = async (userId, totalPrice) => {
  const customerCart = await customerCartDao(userId);
  if (customerCart.length == 0) throwError(400, 'NO_ORDERS')
  return MoveCartToOrderDao(userId, totalPrice);
};

// 주문 목록 불러오기
const getOrderListService = async (userId) => {
  return await getOrderListDao(userId);
};

// 주문 상세 불러오기
const getOrderDetailService = async (userId, orderId) => {
  return await getOrderDetailDao(userId, orderId);
};

// 주문취소 - 구현 못함, 역량 부족, 시간 부족
const cancelOrdersService = async (userId, orderId, totalPrice) => {
  const orderStatus = await checkOrderStatusDao(orderId);
  if (orderStatus == orderStatusEnum.CANCELED) throwError(400, 'ALREADY_CANCELED')
  return await cancelOrdersDao(userId, orderId, totalPrice);
};

module.exports = {
  createOrderService,
  getOrderListService,
  getOrderDetailService,
  cancelOrdersService,
};
