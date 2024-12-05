const pool = require('../db')
const NotService = require('../service/notifications');


class NotificationsController {

    async getAll(req, res) {
        try {
            const not = await NotService.getAll();
            res.json(not);
        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res) {
        const {user_id, title, text, is_seen} = req.body;
        try {
            const not = await NotService.create(user_id, title, text, is_seen);
            res.json(not);
        } catch (error) {
            console.log('error ', error);
        }
    }

    async update(req, res) {
        const id = parseInt(req.params.id);
        const {title, text, is_seen} = req.body;
        try {
            const not = await NotService.update(title, text, is_seen, id);
            res.json(not);
        } catch (error) {
            console.error('error', error);
        }
    }

    async delete(req, res) {
        const id = req.params.id;
        const not = await NotService.delete(id);
        res.json(not);
    }
}

module.exports = new NotificationsController();