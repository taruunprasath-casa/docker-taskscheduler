"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTask = void 0;
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
const Task_1 = require("./Task");
const Role_1 = require("./Role");
const db_1 = require("../db/db");
class UserTask extends sequelize_1.Model {
}
exports.UserTask = UserTask;
UserTask.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    task_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE(3),
        defaultValue: db_1.sequelize.literal("current_timestamp(3)"),
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE(3),
        defaultValue: db_1.sequelize.literal("current_timestamp(3)"),
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Usertask",
    tableName: "user_tasks",
    timestamps: false,
});
UserTask.belongsTo(Task_1.Task, { foreignKey: "task_id" });
UserTask.belongsTo(User_1.User, { foreignKey: "user_id" });
UserTask.belongsTo(Role_1.Role, { foreignKey: "role_id" });
Role_1.Role.hasMany(UserTask, { foreignKey: "role_id" });
Task_1.Task.hasMany(UserTask, { foreignKey: "task_id" });
