'use strict';

let express = require('express'),
    router  = express.Router(),
    wrap    = require('co-express'),
    exec    = require('child_process').execFile;

router.post('/', wrap(function* (req, res, next) {
    let email   = req.body.email,
        password = req.body.password,
        user,
        payload = {
            'success': false,
            'data'   : {},
            'errors' : []
        };

    try {
        user = yield req.app.get('minions').user.getByCreds(email, password);
    } catch (e) {
        return next(e);
    }

    if (! user) {
        payload.errors.push('Invalid creds');
        return res.json(payload);
    }

    // exec shell script
    exec('./bash.sh', [user.domain], function(error, stdout, stderr) {
        if (error) {
            console.log(error);
            payload.errors.push('Oops! Something broke. We notified our sleepy devs!');
            return res.json(payload);
        }

    payload.data.user = user;
    res.json(payload);
    });
}));

module.exports = router;
