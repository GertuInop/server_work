const pool = require('../db')

class EventsService {

    async getAll() {
        const notifications = await pool.query(`SELECT * FROM notifications`);
        return notifications.rows;
    }

    async create(user_id, title, text, is_seen) {
        const notifications = await pool.query(`INSERT INTO notifications (user_id, title, text, is_seen) VALUES ($1, $2, $3, $4) RETURNING *`, [user_id, title, text, is_seen]);
        return notifications.rows;
    }

    async update(title, text, is_seen, id) {
        const notifications = await pool.query(`UPDATE notifications SET title = $1, text = $2, is_seen = $3 WHERE id = $4 RETURNING *`, [title, text, is_seen, id]);
        return notifications.rows;
    }

    async delete(id) {
        const notifications = await pool.query(`DELETE FROM notifications WHERE id = $1`, [id]);
        return notifications.rows;
    }
}

module.exports = new EventsService();