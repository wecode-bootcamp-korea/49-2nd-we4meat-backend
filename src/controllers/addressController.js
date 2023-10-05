const { addressService } = require('../services');
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

const getdefaultaddressController = async (req, res) => {
  const userId = req.user.id;
  const defaultaddress = await addressService.getdefaultaddressService(userId);

  return res.status(200).json({ defaultaddress });
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
