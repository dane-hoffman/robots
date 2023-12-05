const client = require('./client.js');
const {createRobot} = require('./robots.js');
const dropTables = async() => {

    try{

        await client.query(`
            DROP TABLE IF EXISTS robots;

        `)
    }catch(err){
        console.log(err)
    }
}

const createTables = async() => {

    try {
        await client.query(`
            CREATE TABLE robots (
                id SERIAL PRIMARY KEY,
                name VARCHAR(30),
                model VARCHAR(30),
                company_name VARCHAR(30),
                longevity_months INT,
                is_child_safe BOOLEAN,
                cost DECIMAL,
                release_date DATE

            )
        `)
    
    } catch(err) {
    console.log(err);
    }
    }



const syncAndSeed = async() => {
await client.connect();
console.log('CONNECTED TO THE DATABASE!');

await dropTables();
console.log('TABLES DROPPED!');

await createTables();
console.log('TABLES CREATE!');

await createRobot('Ned');
await createRobot('Ramon');
await createRobot('xb500');
console.log('ROBOTS CREATED!')


client.end();
}
syncAndSeed ();