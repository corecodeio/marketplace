const bcrypt = require('bcrypt');
const { bcryptConfig } = require('./../config/index.js');

const users = [
    {
        id: 'd706ea7d-03df-484b-975e-749e730d78b8',
        first_name: process.env.SERVER_DEVELOPMENT_USER_FIRST_NAME
            ? process.env.SERVER_DEVELOPMENT_USER_FIRST_NAME
            : 'First Name',
        last_name: process.env.SERVER_DEVELOPMENT_USER_LAST_NAME
            ? process.env.SERVER_DEVELOPMENT_USER_LAST_NAME
            : 'Last Name',
        email: process.env.SERVER_DEVELOPMENT_USER_EMAIL
            ? process.env.SERVER_DEVELOPMENT_USER_EMAIL
            : 'testing@gmail.com',
        validate_email: true,
        country: process.env.SERVER_DEVELOPMENT_USER_COUNTRY
            ? process.env.SERVER_DEVELOPMENT_USER_COUNTRY
            : 'Guatemala',
        phone: process.env.SERVER_DEVELOPMENT_USER_PHONE
            ? process.env.SERVER_DEVELOPMENT_USER_PHONE
            : '',
        password: bcrypt.hashSync(
            process.env.SERVER_DEVELOPMENT_USER_PASSWORD
                ? process.env.SERVER_DEVELOPMENT_USER_PASSWORD
                : '123456',
            bcryptConfig.rounds
        )
    }
];

module.exports = users;
