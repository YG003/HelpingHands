const auth = require("../controllers/auth");

module.exports = app => {

    const router = require("express").Router();

    router.post("/login", auth.login);
    app.use('/api/auth', router);
};

