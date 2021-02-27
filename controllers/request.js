const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = async (req, res) => {

    // get the user by id
    // create the request and add to linking table
    const userId = req.body.id;

    const user = await User.findByPk(userId)
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id=" + userId
            });
        });

    console.log('user ->', user)
    user.setRequests({
        name: req.body.name
    })
};
