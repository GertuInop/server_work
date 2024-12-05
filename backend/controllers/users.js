const UserService = require('../service/users');


class UserController {

    async getAllUsers(req, res) {
        try {
            const user = await UserService.getAllUsers();
            res.json(user.rows);
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(req, res) {
        const {name, surname, birth_date, address, phone, email, type_of_employment, type_of_education, password, repeat_password} = req.body;
        try {
            const user = await UserService.createUser(name, surname, birth_date, address, phone, email, type_of_employment, type_of_education, password, repeat_password);
            res.json(user.rows);
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

    async updateUser(req, res) {
        const id = parseInt(req.params.id, 10);
        const {surname, name, email, phone, age, address, type_of_employment, type_of_education, role} = req.body;
        try {
            const user = await UserService.updateUser(id, surname, name, email, phone, age, address, type_of_employment, type_of_education, role);
            res.json(user.rows);
        } catch (error) {
            console.error('error', error);
        }
    }

    async updateUserPassword(req, res) {
        const id = parseInt(req.params.id, 10);
        const {password} = req.body;
        try {
            const user = await UserService.updateUserPassword(id, password);
            res.json(user.rows);
        } catch (error) {
            console.error('error', error);
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await UserService.deleteUser(id);
        res.json(user.rows[0]);
    }
}

module.exports = new UserController();