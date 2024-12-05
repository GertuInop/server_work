const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const pool = require('../db')

class TokenWorking {
    async AuthUser(req, res) {
        const { email, password } = req.body;
        try {
            const user = (await pool.query(`SELECT * FROM users WHERE email = &1 `, [email])).rows[0];
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const isPasswordValid = await argon2.verify(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid password' });
            }

            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, process.env.JWT_TIME_EXIST);
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async LogOutUser(req, res) {
        
    }
}

module.exports = new TokenWorking();