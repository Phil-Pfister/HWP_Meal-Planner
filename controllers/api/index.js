const router = require('express').Router();
const userRoutes = require('./user-routes');
const saveRoutes = require('./save-routes');

router.use('/users', userRoutes);
router.use('/save', saveRoutes);

module.exports = router;