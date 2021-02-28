const { router } = require("../app");
const users = require("../controllers/user");

module.exports = app => {
    const router = require("express").Router();
    // console.log('here ->', router)
    // Create a new user
    router.post("/", users.create);
    router.get("/getHeroes/", users.getHeroes)
    // Retrieve a single user with id, this uses a query param from the browser rather than request body
    router.get("/:id", users.findOne);
    console.log("getting called")

    app.use('/api/users', router);
};

