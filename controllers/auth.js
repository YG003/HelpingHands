const db = require("../models");
const User = db.users;


// login
// require, import and export

// controler which uses the model to login a user
exports.login = async (req, res) => {

    // finding the user
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
        throw new Error("boohoo unidentified email")
    }

    // validating user password then resolving with success or erroring if password isnt valid
    await user.validPassword(req.body.password).then(isAuth => {
        res.send("success")
    }).catch(err => {
        res.status(401).json({
            message: 'please stop being silly and use the right password',
            err
        })
    })
};
