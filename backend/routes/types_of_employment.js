const Router = require('express');
const router = new Router();
const EmploymentController = require('../controllers/types_of_employment');

router.get('/employment', EmploymentController.getAllTypes);
router.post('/employment', EmploymentController.createType);
router.put('/employment/:id', EmploymentController.updateType);
router.delete('/employment/:id', EmploymentController.deleteType);

module.exports = router;