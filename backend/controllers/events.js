const EventsService = require('../service/events');

class EventsController {

    async getAllEvents(req, res) {
        try {
            const event = await EventsService.getAll();
            res.json(event);
        } catch (error) {
            console.log(error);
        }
    }

    async getEvent(req, res) {
        try {
            const id = parseInt(req.params.id);
            const event = await EventsService.getOne(id);
            res.json(event);
        } catch (error) {
            console.log(error);
        }
    }

    async createEvent(req, res) {
        const creater_id = parseInt(req.params.user_id);
        const {title, description, address, date, time, link} = req.body;
        try {
            const event = await EventsService.create(creater_id, title, description, address, date, time, link);
            res.json(event);
        } catch (error) {
            console.log('error ', error);
        }
    }
    async updateEvent(req, res) {
        const id = parseInt(req.params.id);
        const {title, description, img_src} = req.body;
        try {
            const event = await EventsService.update(title, description, img_src, id);
            res.json(event);
        } catch (error) {
            console.error('error', error);
        }
    }
    async deleteEvent(req, res) {
        const id = req.params.id;
        const event = await EventsService.delete(id);
        res.json(event.rows);
    }
}

module.exports = new EventsController();