const RegistartionService = require('../service/registrations');

class RegistrationsController {

    async getAllRegistrations(req, res) {
        try {
            const registration = await RegistartionService.getAll();
            res.json(registration);
        } catch (error) {
            console.log(error);
        }
    }

    async createRegistration(req, res) {
        const user_id = parseInt(req.params.user_id);
        const event_id = parseInt(req.params.event_id);
        try {
            const registration = await RegistartionService.create(user_id, event_id);
            res.json(registration);
        } catch (error) {
            console.log('error ', error);
        }
    }
    async updateRegistration(req, res) {
        const id = parseInt(req.params.id);
        const {event_id, event_title, user_id} = req.body;
        try {
            const registration = await RegistartionService.update(id, event_id, event_title, user_id);
            res.json(registration);
        } catch (error) {
            console.error('error', error);
        }
    }
    async deleteRegistration(req, res) {
        const id = req.params.id;
        const registration = await RegistartionService.delete(id);
        res.json(registration);
    }
}

module.exports = new RegistrationsController();