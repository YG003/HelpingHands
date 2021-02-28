const { router } = require("../app");
const request = require("../controllers/request");

module.exports = app => {
    const router = require("express").Router();
    router.post("/createRequest", request.create);
    router.get("/getRequests", request.get);

    // this is a prefix defined in express
    // /requests/getRequests
    app.use('/requests', router);
};

