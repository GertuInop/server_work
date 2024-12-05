const pool = require('../db');
const argon2 = require('argon2');

class UserService {

    async getAllUsers(req, res) {
        const user = await pool.query(`SELECT * FROM users`);
        return user;
    }

    async createUser(name, surname, birth_date, address, phone, email, type_of_employment, type_of_education, password, repeat_password) {
        if (password != repeat_password)
            return res.status(400).send('Неправильно введён повторный пароль');

        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1 or phone = $2', [email, phone]);
        if (userCheck.rows.length > 0)
            return console.log('Такой пользователь уже существует');

        try {
            const hashedPassword = await argon2.hash(password);
            const user = await pool.query(`INSERT INTO users (name, surname, birth_date, address, phone, email, type_of_employment, type_of_education, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [name, surname, birth_date, address, phone, email, type_of_employment, type_of_education, hashedPassword]);
            return user;
        } catch (error) {
            console.log('error ', error);
        }
    }

    // async logoutUser (req, res) {
    //     req.session.destroy((err) => {
    //         if (err) {
    //             return res.status(500).send('Ошибка при выходе');
    //         }
    //         res.send('Успешный выход');
    //     });
    // }

    async updateUser(id, surname, name, email, phone, age, address, type_of_employment, type_of_education, role) {
        const user = await pool.query(`UPDATE users SET surname = $1, name = $2, email = $3, phone = $4, age = $5, address = $6, type_of_employment = $7, type_of_education = $8, role = $9 WHERE id = $10 RETURNING *`, [surname, name, email, phone, age, address, type_of_employment, type_of_education, role, id]);
        return user;
    }
    async updateUserPassword(id, password) {
        const user = await pool.query(`UPDATE users SET password = $1 WHERE id = $2 RETURNING *`, [password, id]);
        return user;
    }
    async deleteUser(id) {
        const user = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
        return user;
    }
}

module.exports = new UserService();