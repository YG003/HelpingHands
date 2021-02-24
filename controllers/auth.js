const db = require("../models");
const User = db.users;

//promise js
// login 
exports.login = async (req, res) => {

    const user = await User.findOne({ where: { email: req.body.email } });


    if (!user) {
        throw new Error("boohoo unidentified email")
    }

    await user.validPassword(req.body.password).catch(err => {
        throw new Error("password is invalid")
    })
    console.log("doododoo")
    res.send("success")
};
