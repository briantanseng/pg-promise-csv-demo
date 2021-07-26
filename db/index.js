const pgp = require('pg-promise')();
const connectionString =
    'postgresql://postgres:secret@localhost:5432/dvdrental_local';

const db = pgp(connectionString);

module.exports = db;