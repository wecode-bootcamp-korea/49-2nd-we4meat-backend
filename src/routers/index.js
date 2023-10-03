const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const reviewRouter = require('./reviewRouter');
const cartRouter = require('./cartRouter');

router.use('/users', userRouter);
router.use('/list', productRouter);
router.use('/review', reviewRouter);
router.use('/cart', cartRouter);

module.exports = router;
