'use strict';

const path = require('path');
let basePath = path.join(__dirname, '../../../../');
const env = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);
// if (env === 'production') {
//     basePath = './';
// }

if (env !== 'production') {
    const envPath = path.join(basePath, `.env/${env}.env`);
    const envConfig = require('dotenv').config({
        path: envPath
    });
    if (envConfig.error) {
        throw envConfig.error;
    }
}

const development = {
    env,
    host: process.env.HOST,
    port: process.env.PORT,
    url: `${process.env.HOST}:${process.env.PORT}`,
    redisUrl: process.env.REDIS_URL,
    mongoUrl: `mongodb+srv://${process.env.MONGODB_HOST}`,
    seed: process.env.SEED,
    caducidadToken: process.env.CADUCIDAD_TOKEN, // 30 dias
    // frontendStaticFolder: path.join(basePath + 'src/views')
};

// const production = {
//     env,
//     host: process.env.HOST,
//     port: process.env.PORT,
//     url: process.env.HOST,
//     redisUrl: process.env.REDIS_URL,
//     mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}`,
//     seed: process.env.SEED,
//     frontendStaticFolder: path.join(basePath + '/src/views'),
//     caducidadToken: process.env.CADUCIDAD_TOKEN,
//     noodoeOwnerId: process.env.NOODOE_OWNER_ID,
//     noodoeCabinetOwnerType: process.env.NOODOE_CABINET_OWNER_TYPE
// };

// const test = {
//     env,
//     host: process.env.HOST,
//     port: process.env.PORT,
//     url: `http://${process.env.HOST}:${process.env.PORT}`,
//     redisUrl: process.env.REDIS_URL,
//     mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(
//     process.env.MONGODB_PASS
//   )}@${process.env.MONGODB_HOST}`,
//     seed: process.env.SEED,
//     frontendStaticFolder: path.join(basePath + 'src/views')
// };

const config = { /*test,*/ development /*, production*/ };
console.log(`MONGODB_HOST=${process.env.MONGODB_HOST}\n
MONGODB_USER=${process.env.MONGODB_USER}\n
MONGODB_PASS=${process.env.MONGODB_PASS}\n`);
module.exports = config[env];