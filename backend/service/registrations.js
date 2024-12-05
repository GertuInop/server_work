const pool = require('../db')

class RegistartionService {

    async getAll(req, res) {
        const registration = await pool.query(`SELECT * FROM event_registrations`);
        return registration.rows;
    }

    async create(user_id, event_id) {
        const event_title = (await pool.query(`SELECT title FROM events WHERE id = $1`, [event_id])).rows[0].title;
        const registration = await pool.query(`INSERT INTO event_registrations(event_id, event_title, user_id) VALUES ($1, $2, $3) RETURNING *`, [event_id, event_title, user_id]);
        return registration.rows;
    }
    
    async update(id, event_id, event_title, user_id) {
        const registration = await pool.query(`UPDATE event_registrations SET event_id = $1, event_title = $2, user_id = $3 WHERE id = $4 RETURNING *`, [event_id, event_title, user_id, id]);
        return registration.rows;
    }

    async delete(id) {
        const registration = await pool.query(`DELETE FROM event_registrations WHERE id = $1`, [id]);
        return registration.rows;
    }
}

module.exports = new RegistartionService();