const tutorials = require("../controllers/tutorial");

module.exports = app => {

    const router = require("express").Router();
    console.log('here ->', router)
    // Create a new Tutorial
    router.post("/", tutorials.create);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
    console.log("getting called")
    app.use('/api/tutorials', router);
};