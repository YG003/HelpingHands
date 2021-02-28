const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");


// user model
module.exports = (sequelize) => {
    const user = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        gender: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
        },
    }, {
        // activates as the user is created and hashes the password before saving in db
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },

    });
    //read prototypes

    // declaring a proto on instances of user so that we can use in the auth controller
    user.prototype.validPassword = async function (password) {
        const isValid = bcrypt.compareSync(password, this.password);
        if (!isValid) throw new Error('invalid password')
        return isValid
    }

    return user;
};

