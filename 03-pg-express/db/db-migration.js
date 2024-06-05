import db from './db-start.js';

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INTEGER NOT NULL
    );
`;

const runDbMigrations = async () => {
    console.log('BEGIN DB MIGRATION');

    // use single client forn transactions
    const client = await db.connect();

    try {
        await client.query('BEGIN'); // begin transaction

        await client.query(createUsersTable);

        await client.query('COMMIT'); // commit transaction

        console.log('END DB MIGRATION');
    } catch (e) {
        await client.query('ROLLBACK'); // rollback transaction

        console.log('DB migration failed');

        throw e;
    } finally {
        client.release();
    }
};

export default runDbMigrations;
