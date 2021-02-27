const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
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
        // userId: {
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV1,
        //     primaryKey: true
        // }
    }, {
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },

    });
    user.prototype.validPassword = async function (password) {
        const isValid = bcrypt.compareSync(password, this.password);
        if (!isValid) throw new Error('invalid password')
        return isValid
    }

    return user;
};

