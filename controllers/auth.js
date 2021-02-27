const db = require("../models");
const User = db.users;

//promise js
// login 
exports.login = async (req, res) => {

    const user = await User.findOne({ where: { email: req.body.email } });


    if (!user) {
        throw new Error("boohoo unidentified email")
    }

    await user.validPassword(req.body.password).then(isAuth => {
        res.send("success")
    }).catch(err => {
        res.status(401).json({
            message: 'please stop being silly and use the right password',
            err
        })
    })
};
