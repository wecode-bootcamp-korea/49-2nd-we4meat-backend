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

  if (!deleteAddress) return 'CAN_NOT_DELETE_ADDRESS';

  return deleteAddress;
};

//기본주소입력
const getdefaultaddressService = async (userId) => {
  const defaultaddress = await addressDao.getdefaultaddressDao(userId);

  if (defaultaddress === null || defaultaddress === undefined) {
    return ''; // 주소가 없는 경우 빈 문자열 반환
  }

  console.log('defaultaddress:', defaultaddress);

  // defaultaddress는 배열이 아닌 객체 형태일 것으로 가정하고, address 속성을 반환
  return addressDao.defaultAddressDao;
};

module.exports = {
  getOrderAddressService,
  deleteOrderAddressService,
  createOrderAddressService,
  getCustomerAllAddressService,
  getdefaultaddressService,
};
