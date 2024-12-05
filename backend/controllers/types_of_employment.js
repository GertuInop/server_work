const EmploymentService = require('../service/types_of_employment')

class EmploymentController {

    async getAllTypes(req, res) {
        try {
            const role = await EmploymentService.getAllTypes();
            res.json(role.rows);
        } catch (error) {
            console.log(error);
        }
    }

    async createType(req, res) {
        const {type_name} = req.body;
        try {
            const role = await EmploymentService.createType(type_name);
            res.json(role.rows);
            console.log('Created type ', type_name);
        } catch (error) {
            console.log('error ', error);
        }
    }
    async updateType(req, res) {
        const id = parseInt(req.params.id);
        const {type_name} = req.body;
        try {
            const role = await EmploymentService.updateType(id, type_name);
            res.json(role.rows);
        } catch (error) {
            console.error('error', error);
        }
    }
    async deleteType(req, res) {
        const id = req.params.id;
        const role = await EmploymentService.deleteType(id);
        res.json(role.rows);
    }
}

module.exports = new EmploymentController();