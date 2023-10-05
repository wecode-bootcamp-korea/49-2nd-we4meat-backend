const { dataSource } = require('./dataSource');

//주소배송지,요청사항입력
const createAddressDao = async (userId, address, message) => {
  return await dataSource.query(
    `
    INSERT INTO customer_address (customer_id, address, message)
    VALUES (?, ?, ?);
    `,
    [userId, address, message],
  );
};

//주소불러오기
const getAddressDao = async (userId) => {
  return await dataSource.query(
    `
  SELECT
  address
  FROM customer_address
  WHERE id=?
  `,
    [userId],
  );
};
//주소전부불러오기
const getCustomerAllAddressDao = async (userId) => {
  console.log('유저 아이디: ', userId);
  return await dataSource.query(
    `
    SELECT customer_address.*
    FROM customer_address
    JOIN customers ON customer_address.customer_id = customers.id
    WHERE customers.id = ?;
  `,
    [userId],
  );
};

const getdefaultaddressDao = async (userId) => {
  // 첫 번째 쿼리: 주소 조회
  const getAddressResult = await dataSource.query(
    `
    SELECT customer_address.customer_id,
           customer_address.address
    FROM 
           customer_address 
    LEFT JOIN customers ON
           customers.id = customer_address.customer_id
           WHERE customer_id = ?
    `,
    [userId],
  );
  console.log(getAddressResult);

  // 주소가 존재하면 업데이트 쿼리 실행
  if (getAddressResult.length > 0) {
    const updateAddress = getAddressResult[0].address;
    console.log(updateAddress);
    // 두 번째 쿼리: customers 테이블의 address 열 업데이트
    await dataSource.query(
      `
      UPDATE customers SET address = ? WHERE id = ?
      `,
      [updateAddress, userId],
      console.log(updateAddress, userId),
    );
  }
};

const deleteCustomerAddressDao = async (userId, address) => {
  await dataSource.query(
    `
  DELETE
  FROM customer_address
  WHERE customer_id = ? AND address = ?
  `,
    [userId, address],
  );
};

module.exports = {
  getAddressDao,
  getCustomerAllAddressDao,
  createAddressDao,
  deleteCustomerAddressDao,
  getdefaultaddressDao,
};
