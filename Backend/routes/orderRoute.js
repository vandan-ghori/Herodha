const { newOrder, executeOrder, cancelOrder } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post('/newOrder', protect, newOrder);
router.post('/executeOrder/:id', protect, executeOrder);
router.delete('/cancelOrder/:id', protect, cancelOrder);

module.exports = router;
