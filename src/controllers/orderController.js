const { throwError } = require('../../utils');
const { orderService } = require('../services');
const {
  createOrderService,
  getOrderListService,
  getOrderDetailService,
  cancelOrdersService,
} = orderService;

//주문하기 - 구현완료, 생성완료
const createOrderController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { totalPrice } = req.body;
    if (!userId) throwError(400, "KEY_ERROR_UID");
    if (!totalPrice) throwError(400, "KEY_ERROR_TP");
    return res.status(200).json({
      message: 'ORDER_CREATED',
      data: await createOrderService(userId, totalPrice),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 주문 목록 불러오기
const getOrderListController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { limit, offset }  = req.query;
    if (!limit || !offset) throwError(400, 'NO_QUERYSTRING');
    if (!userId) throwError(400, "KEY_ERROR_UID");
    return res.status(200).json({
      message: 'ORDER_LIST_LOADED',
      data: await getOrderListService(userId, limit, offset),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 주문 생성 불러오기
const getOrderDetailController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    if (!userId) throwError(400, "KEY_ERROR_UID");
    if (req?.query.Id == null) throwError(400, 'KEY_ERROR_OID');
    const orderId = req.query.Id;
    return res.status(200).json({
      message: 'ORDER_DETAIL_LOADED',
      data: await getOrderDetailService(userId, orderId),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//주문 취소
const cancelOrdersController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { orderId, totalPrice } = req.body;
    return res.status(200).json({
      message: 'ORDER_CANCELED',
      data: await cancelOrdersService(userId, orderId, totalPrice),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
module.exports = {
  createOrderController,
  getOrderListController,
  getOrderDetailController,
  cancelOrdersController,
};
