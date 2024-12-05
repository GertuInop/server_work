const pool = require('../db')

class EducationService {

    async getAllTypes() {
        const role = await pool.query(`SELECT * FROM types_of_education`);
        return role;
    }

    async createType(type_name) {
        const role = await pool.query(`INSERT INTO types_of_education(type_name) VALUES ($1) RETURNING *`, [type_name]);
        return role;
    }

    async updateType(id, type_name) {
        const role = await pool.query(`UPDATE types_of_education SET type_name = $1 WHERE id = $2 RETURNING *`, [type_name, id]);
        return role;
    }

    async deleteType(id) {
        const role = await pool.query(`DELETE FROM types_of_education WHERE id = $1`, [id]);
        return role;
    }
}

module.exports = new EducationService();