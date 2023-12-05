const client = require('./client.js');

const dropTables = async() => {

    try{

        await client.query(`
            DROP TABLE robots;

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
console.log('CONNECTED TO THE DATABSE!');

await dropTables();
console.log('DROPPED TABLES!');

await createTables();
console.log('CREATED TABLES!');


client.end();
}
syncAndSeed ();