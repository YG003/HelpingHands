const auth = require("../controllers/auth");

module.exports = app => {

    const router = require("express").Router();
    console.log('here ->', router)
    // Create a new user
    router.post("/login", auth.login);
    app.use('/api/auth', router);
};

