const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {

    console.log("foofoo", req.body)

    // Create a user
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        age: req.body.age,
        gender: req.body.gender,
        role: req.body.role,
    };

    // Save user in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve all users from the database.
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id=" + id
            });
        });
};

// controller which gets all users that have the role type 'offer'
exports.getHeroes = async (req, res) => {
    console.log("hello there")
    // find all heroes with the 'offer' role
    const heroes = await User.findAll({
        where: {
            role: 'Offer'
        }
    }).catch(err => {
        console.log('err =>', err)
    })
    res.send(heroes)
}