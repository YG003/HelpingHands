const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const db = require('.')

// request model
module.exports = (sequelize) => {
    const Request = sequelize.define("request", {
        name: {
            type: DataTypes.STRING
        },
    });

    return Request;
};

