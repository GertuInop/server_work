const Router = require('express');
const router = new Router();
const EducationController = require('../controllers/types_of_education');

router.get('/education', EducationController.getAllTypes);
router.post('/education', EducationController.createType);
router.put('/education/:id', EducationController.updateType);
router.delete('/education/:id', EducationController.deleteType);

module.exports = router;