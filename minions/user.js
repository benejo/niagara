'use strict';

module.exports = function (cfg) {
    let Promise = require('bluebird');

    class User {
        static getByCreds(email, password) {
            return new Promise((resolve, reject) => {
                if (cfg.creds[email] && cfg.creds[email].password === password) {
                    return resolve(cfg.creds[email]);
                }

                return resolve(null);
            });
        }
    }

    return User;
};
