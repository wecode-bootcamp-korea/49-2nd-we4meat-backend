const { addressService } = require('../services');
const { throwError } = require('../../utils');
//주소 불러오기
const getAddressController = async (req, res) => {
  const userId = req.user.id;
  const userAddress = await addressService.getOrderAddressService(userId);
  res.status(200).json({ userAddress });
};
//주소 list 불러오기
const getCustomerAllAddressController = async (req, res) => {
  const userId = req.user.id;
  const userAllAddress =
    await addressService.getCustomerAllAddressService(userId);

  return res.status(200).json({ userAllAddress });
};
//배송주소,요청사항 입력
const createAddressController = async (req, res) => {
  const userId = req.user.id;
  const { address, message } = req.body;
  const createAddress = await addressService.createOrderAddressService(
    userId,
    address,
    message,
  );
  return res.status(200).json({ createAddress });
};
const getdefaultaddressController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId, '아이디 해독 됐나요?');
    const defaultaddress =
      await addressService.getdefaultaddressService(userId);

    if (defaultaddress === null) {
      // 주소가 null인 경우에 대한 처리
      return res.status(404).json({ error: 'NO_DEFAULT_ADDRESS' });
    }

    return res.status(200).json({ defaultaddress });
  } catch (err) {
    console.error(err);
    next(err); // 에러를 다음 미들웨어로 전달
  }
};

const deleteOrderAddressController = async (req, res) => {
  const userId = req.user.id;
  const { address } = req.body;
  const deleteaddress = await addressService.deleteOrderAddressService(
    userId,
    address,
  );
  return res.status(200).json({ deleteaddress });
};

module.exports = {
  getAddressController,
  getCustomerAllAddressController,
  createAddressController,
  getdefaultaddressController,
  deleteOrderAddressController,
};
