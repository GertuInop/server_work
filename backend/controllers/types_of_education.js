const TypesService = require('../service/types_of_education');

class EducationController {

    async getAllTypes(req, res) {
        try {
            const role = await TypesService.getAllTypes();
            res.json(role.rows);
        } catch (error) {
            console.log(error);
        }
    }

    async createType(req, res) {
        const {type_name} = req.body;
        try {
            const role = await TypesService.createType(type_name);
            res.json(role.rows);
        } catch (error) {
            console.log('error ', error);
        }
    }
    async updateType(req, res) {
        const id = parseInt(req.params.id);
        const {type_name} = req.body;
        try {
            const role = await TypesService.updateType(id, type_name);
            res.json(role.rows);
        } catch (error) {
            console.error('error', error);
        }
    }
    async deleteType(req, res) {
        const id = req.params.id;
        const role = await TypesService.deleteType(id);
        res.json(role.rows);
    }
}

module.exports = new EducationController();