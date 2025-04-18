const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    // Add other configuration settings here as needed
};

module.exports = config;