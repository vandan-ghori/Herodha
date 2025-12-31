const { getHoldings, getOrders, getFunds, addFunds } = require('../controllers/dataController');
const { protect } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.get('/allHoldings', protect, getHoldings); 
router.get('/allOrders', protect, getOrders); 
router.get('/funds', protect, getFunds); 
router.post('/funds/add', protect, addFunds); 

module.exports = router;
