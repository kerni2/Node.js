import {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
} from '../db/pg-data.js';

class UsersController {
    async create(req, res) {
        try {
            const result = await addUser(req.body);
            res.status(201).json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async findAll(req, res) {
        try {
            const result = await getUsers();
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async findOne(req, res) {
        try {
            const result = await getUserById(+req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateOne(req, res) {
        try {
            const result = await updateUser(+req.params.id, req.body);
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteOne(req, res) {
        try {
            const result = await deleteUser(+req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UsersController();
