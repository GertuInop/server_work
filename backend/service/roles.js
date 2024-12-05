const pool = require('../db')

class RolesService {

    async getAll() {
        const role = await pool.query(`SELECT * FROM roles`);
        return role.rows;
    }

    async create(role_name) {
        const role = await pool.query(`INSERT INTO roles(role_name) VALUES ($1) RETURNING *`, [role_name]);
        return role.rows;
    }

    async update(id, role_name) {
        const role = await pool.query(`UPDATE roles SET role_name = $1 WHERE id = $2 RETURNING *`, [role_name, id]);
        return role.rows;
    }
    
    async delete(id) {
        const role = await pool.query(`DELETE FROM roles WHERE id = $1`, [id]);
        return role.rows;
    }
}

module.exports = new RolesService();