const RolesService = require('../service/roles');

class RolesController {

    async getAll(req, res) {
        try {
            const role = await RolesService.getAll();
            res.json(role);
        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res) {
        const {role_name} = req.body;
        try {
            const role = await RolesService.create(role_name);
            res.json(role);
        } catch (error) {
            console.log('error ', error);
        }
    }
    async update(req, res) {
        const id = parseInt(req.params.id);
        const {role_name} = req.body;
        try {
            const role = await RolesService.update(id, role_name);
            res.json(role);
        } catch (error) {
            console.error('error', error);
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        const role = await RolesService.delete(id);
        res.json(role);
    }
}

module.exports = new RolesController();