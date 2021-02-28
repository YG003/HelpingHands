const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

// sequelize instance which we use to create models and set associations 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importing models and setting them up passing through the sequelize instance
db.users = require("./user.js")(sequelize);
db.requests = require("./request.js")(sequelize)

// building the association between the user and requests
db.users.hasMany(db.requests);


module.exports = db;

// sequelize instance + db config
// Model
// controller
// router
// view
