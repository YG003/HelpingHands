const { router } = require("../app");
const request = require("../controllers/request");

module.exports = app => {
    const router = require("express").Router();
    router.post("/createRequest", request.create);
    app.use('/requests', router);
};

