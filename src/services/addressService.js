const { create } = require('domain');
const { addressDao } = require('../models');
//주소가져오기
const getOrderAddressService = async (userId) => {
  const getaddress = await addressDao.getAddressDao(userId);
  console.log(getaddress);
  if (!getaddress) return 'NO_ADDRESS';
  return getaddress;
};
//주소list불러오기
const getCustomerAllAddressService = async (userId) => {
  const getAllAddress = await addressDao.getCustomerAllAddressDao(userId);
  console.log(getAllAddress);
  if (!getAllAddress) return 'NO_DATA_ADDRESS';
  return getAllAddress;
};
//배송주소,요청사항 입력
const createOrderAddressService = async (userId, address, message) => {
  const createAddress = await addressDao.createAddressDao(
    userId,
    address,
    message,
  );
  console.log(createAddress);
  if (!createAddress) return 'CAN_NOT_CREATE_ADDRESS';
  return createAddress;
};
//주소삭제
const deleteOrderAddressService = async (userId, address) => {
  const deleteAddress = await addressDao.deleteCustomerAddressDao(
    userId,
    address,
  );
  console.log(deleteAddress);
  if (!deleteAddress) return 'CAN_NOT_DELETE_ADDRESS';
  return deleteAddress;
};
//기본주소입력
const getdefaultaddressService = async (userId) => {
  const defaultaddress = await addressDao.getdefaultaddressDao(userId);
  console.log(defaultaddress);
  if (!defaultaddress) return 'NO_DEFAULT_ADDRESS';
  return defaultaddress;
};

module.exports = {
  getOrderAddressService,
  deleteOrderAddressService,
  createOrderAddressService,
  getCustomerAllAddressService,
  getdefaultaddressService,
};
