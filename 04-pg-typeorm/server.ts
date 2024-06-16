import 'dotenv/config';

import app from './app.js';
import { initDataSource } from './db/data-source.js';

async function start() {
    await initDataSource();

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`😎😇 Running on port ${port} 😇😎`);
    });
}

start();
