import db from '../db/db-start.js';

const create = async ({ name, age }) => {
    const query = `
        INSERT INTO
            users (name, age)
        VALUES
            ($1, $2)
        RETURNING *
    ;`;

    const result = await db.query(query, [name, age]);

    return result.rows[0];
};

const findOne = async (id) => {
    const query = `
        SELECT * FROM
            users
        WHERE
            id = $1
    ;`;

    const result = await db.query(query, [+id]);

    return result.rows[0];
};

const findAll = async () => {
    const query = `
        SELECT * FROM
            users
    ;`;

    const result = await db.query(query);

    return result.rows;
};

const updateOne = async (id, { name, age }) => {
    const query = `
        UPDATE
            users
        SET
            name = $2,
            age = $3
        WHERE
            id = $1
        RETURNING *
    ;`;

    const result = await db.query(query, [+id, name, age]);

    return result.rows[0];
};

const deleteOne = async (id) => {
    const query = `
        DELETE FROM
            users
        WHERE
            id = $1
        RETURNING *
    ;`;

    const result = await db.query(query, [+id]);

    return result.rows[0];
};

export default {
    create,
    findOne,
    findAll,
    updateOne,
    deleteOne,
};
