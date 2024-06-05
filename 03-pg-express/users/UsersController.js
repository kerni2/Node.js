import usersDBQuery from './usersDBQuery.js';

class UsersController {
    async create(req, res) {
        try {
            const result = await usersDBQuery.create(req.body);
            res.status(201).json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async findAll(req, res) {
        try {
            const result = await usersDBQuery.findAll();
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async findOne(req, res) {
        try {
            const result = await usersDBQuery.findOne(+req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateOne(req, res) {
        try {
            const result = await usersDBQuery.updateOne(
                +req.params.id,
                req.body
            );
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteOne(req, res) {
        try {
            const result = await usersDBQuery.deleteOne(+req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UsersController();
