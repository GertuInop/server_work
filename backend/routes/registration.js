const Router = require('express');
const router = new Router();
const RegistrationsController = require('../controllers/registrations');

router.get('/registration', RegistrationsController.getAllRegistrations);
router.post('/event/:event_id/registration/:user_id', RegistrationsController.createRegistration);
router.put('/registration/:id', RegistrationsController.updateRegistration);
router.delete('/registration/:id', RegistrationsController.deleteRegistration);

module.exports = router;