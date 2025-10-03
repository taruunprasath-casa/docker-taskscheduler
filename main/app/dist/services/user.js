"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserService {
    async createUser(user) {
        return await User_1.User.create(user);
    }
    async getAllUsers() {
        return await User_1.User.findAll();
    }
    async getUserById(id) {
        return await User_1.User.findByPk(id);
    }
    async updateUser(id, data) {
        const user = await User_1.User.findByPk(id);
        if (!user)
            throw new Error("User Not Found");
        return await user.update(data);
    }
    async deleteUser(id) {
        const user = await User_1.User.findByPk(id);
        if (!user)
            throw new Error("User Not Found");
        await user.destroy();
        return true;
    }
}
exports.default = new UserService();
