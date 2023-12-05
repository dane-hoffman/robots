const {Client} = require ('pg');

const client = new Client('postgress://localhost:5432/robots');

module.exports = client;