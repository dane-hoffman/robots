const client = require('./client.js');
const createRobot = async(name) => {
try{
    await client.query(`
    INSERT INTO robots (name)
    VALUES ('${name}');
    `)

}catch(err){
    console.log(err);
}
}

module.exports = {
    createRobot
}