const environments = {
    dev: {
        baseURL: 'https://dev.the-internet.herokuapp.com',
        timeout: 30000
    },
    staging: {
        baseURL: 'https://the-internet.herokuapp.com',
        timeout: 30000
    },
    production: {
        baseURL: 'https://the-internet.herokuapp.com',
        timeout: 60000
    }
};

// Read which environment to use
// Default to staging if not specified
const env = process.env.ENV || 'staging';

module.exports = environments[env];