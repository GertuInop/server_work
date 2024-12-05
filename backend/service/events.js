const pool = require('../db')

class EventsService {

    async getAll() {
        const event = await pool.query(`SELECT title, description, address, CAST(date AS varchar(50)), CAST(to_char(time, 'HH:MI') AS varchar(50)) as time, img_link FROM events`);
        return event.rows;
    }

    async getOne(id) {
        const event = await pool.query(`SELECT * FROM events WHERE id = $1`, [id]);
        return event.rows;
    }

    async create(creater_id, title, description, address, date, time, link) {
        const event = await pool.query(`INSERT INTO events (title, description, address, date, time, img_link, creater_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [title, description, address, date, time, link, creater_id]);
        return event.rows;
    }

    async update(title, description, img_src, id) {
        const event = await pool.query(`UPDATE events SET title = $1, description = $2, img_link = $3 WHERE id = $4 RETURNING *`, [title, description, img_src, id]);
        return event.rows;
    }

    async delete(id) {
        const event = await pool.query(`DELETE FROM events WHERE id = $1`, [id]);
        return event.rows[0];
    }
}

module.exports = new EventsService();