import { Pool } from 'pg';

const {
    POSTGRES_LOCATION,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_NAME,
    ENV,
    POSTGRES_NAME_TEST
} = process.env;

const db = new Pool({
    database: POSTGRES_NAME,
    host: POSTGRES_LOCATION,
    password: POSTGRES_PASSWORD,
    user: POSTGRES_USER,
});

export default db;
