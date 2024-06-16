import { DataSource } from 'typeorm';
import { User } from '../users/User';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [User],
});

export const initDataSource = async () => {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
};

initDataSource().catch((err) => {
    console.log('Error during Data Source initialization', err);
});
