const express = require('express');
const authentication = require('../middlewares/authentication.js');
const addBorrowRequestService = require('../controllers/addBorrowRequest.service.js');
const getMyBorrowedItemsService = require('../controllers/getMyBorrowedItems.service.js');
const getMyLentItemsService = require('../controllers/getMyLentItems.service.js');
const updateMyBorrowRequestService = require('../controllers/updateBorrowRequest.service.js');
const router = express.Router();

router.post('/', addBorrowRequestService);
router.get('/borrowed', getMyBorrowedItemsService);
router.get('/lent', getMyLentItemsService);
router.patch('/:id', updateMyBorrowRequestService);

module.exports = router;