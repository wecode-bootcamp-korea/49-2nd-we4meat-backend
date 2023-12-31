const { dataSource } = require('./dataSource');

const getVerificationCodeDao = async (email) => {
  const [id] = await dataSource.query(
    `
        SELECT id FROM customers WHERE email = ?
        `,
    [email],
  );
  return id;
};

const setNewPasswordDao = async (id, password) => {
  await dataSource.query(
    `
  UPDATE customers SET password = ? WHERE id = ? 
  `,
    [password, id],
  );
};

const loginEmailCheckDao = async (email) => {
  const emailCheck = await dataSource.query(
    `
    SELECT id, email, password, name
    FROM customers
    WHERE email = ?;
  `,
    [email],
  );
  return emailCheck;
};

const createUserDao = async (name, email, password, phoneNumber) => {
  const userCredential = dataSource.query(
    `INSERT INTO customers(
      name, email, password, phonenumber) VALUES (?, ?, ?, ?);
  `,
    [name, email, password, phoneNumber],
  );
  return userCredential;
};

const dupliCheckEmailDao = async (email) => {
  const checkVal = await dataSource.query(
    `
    SELECT email FROM customers WHERE email = ?
    `,
    [email],
  );
  return checkVal.length;
};

const dupliCheckPhoneDao = async (phonenumber) => {
  const checkVal = await dataSource.query(
    `
    SELECT phonenumber FROM customers WHERE phonenumber = ?
    `,
    [phonenumber],
  );
  return checkVal.length;
};

const getUserInfoDao = async (userId) => {
  return await dataSource.query(
    `SELECT
      c.name,
      c.phonenumber AS phoneNumber,
      c.address,
      cw.credit AS credit
    FROM customers c
    JOIN customer_wallets cw ON c.id = cw.customer_id
    WHERE c.id = ?`, [userId],);
};

module.exports = {
  getVerificationCodeDao,
  setNewPasswordDao,
  loginEmailCheckDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckPhoneDao,
  getUserInfoDao,
};
