const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const db = require('.')

module.exports = (sequelize, Sequelize) => {
    const Request = sequelize.define("request", {
        name: {
            type: DataTypes.STRING
        },
        // requestId: {
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV1,
        //     primaryKey: true
        // }
    });

    console.log('requests?', db)

    return Request;
};

