const { router } = require("../app");
const users = require("../controllers/user");

module.exports = app => {
    console.log('what am i ->', users)
    const router = require("express").Router();
    // console.log('here ->', router)
    // Create a new user
    router.post("/", users.create);
    router.get("/getHeroes/", users.getHeroes)
    // Retrieve a single user with id
    router.get("/:id", users.findOne);
    console.log("getting called")

    app.use('/api/users', router);
};

