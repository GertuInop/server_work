const Router = require('express');
const router = new Router();
const NotificationsController = require('../controllers/notifications');

router.get('/notification', NotificationsController.getAll);
router.post('/notification', NotificationsController.create);
router.put('/notification/:id', NotificationsController.update);
router.delete('/notification/:id', NotificationsController.delete);

module.exports = router;