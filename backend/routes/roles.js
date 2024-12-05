const Router = require('express');
const router = new Router();
const RolesController = require('../controllers/roles');

router.get('/role', RolesController.getAll);
router.post('/role', RolesController.create);
router.put('/role/:id', RolesController.update);
router.delete('/role/:id', RolesController.delete);

module.exports = router;