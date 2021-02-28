const db = require("../models");

const User = db.users;
const Request = db.requests
const Op = db.Sequelize.Op;

// controller which uses the request model to create a request
exports.create = async (req, res) => {

    // get the user by id
    // create the request and add to linking table
    const userId = req.body.id;

    // fetch the user
    const user = await User.findByPk(userId)
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id=" + userId
            });
        });

    // create the request 
    const request = await Request.create({ name: req.body.name })
    console.log('user ->', user.setRequests)
    // associate the request with the user
    user.setRequests(request)
    res.send('success')
};

// controller that uses the requests model to get all requests
exports.get = async (req, res) => {
    const requests = await Request.findAll()

    console.log('results herey ->', requests)

    res.send(requests)
}