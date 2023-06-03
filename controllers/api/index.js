const router = require('express').Router();
const userRoutes = require('./user-routes');
const saveRoutes = require('./save-routes');
const deleteRoutes = require('./delete-recipe-routes');

router.use('/users', userRoutes);
router.use('/save', saveRoutes);
router.use('/delete', deleteRoutes);

module.exports = router;