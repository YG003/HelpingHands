module.exports = function (sequelize, Sequelize) {
    // Sequelize user model is initialized earlier as User
    const User = sequelize.define('user', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        firstname: { type: Sequelize.STRING },
        lastname: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING, validate: { isEmail: true } },
        password: { type: Sequelize.STRING },
    });

    return User;
}