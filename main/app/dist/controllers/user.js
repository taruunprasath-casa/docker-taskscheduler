"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../validators/user"));
const user_2 = __importDefault(require("../services/user"));
const createUser = async (req, res) => {
    try {
        const userData = user_1.default.userData.parse(req.body);
        const createdUser = await user_2.default.createUser(userData);
        res.status(201).json(createdUser);
    }
    catch (err) {
        const errMessage = err instanceof Error ? err.message : "Unknown Error";
        res.status(400).json({ err: errMessage });
    }
};
const getAllUsers = async (_req, res) => {
    try {
        const users = await user_2.default.getAllUsers();
        res.json(users);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({ error: message });
    }
};
const getUserById = async (req, res) => {
    try {
        const users = await user_2.default.getUserById(Number(req.params.id));
        res.status(200).json(users);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({ error: message });
    }
};
const updateUser = async (req, res) => {
    try {
        const updated = await user_2.default.updateUser(Number(req.params.id), req.body);
        res.json(updated);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        res.status(400).json({ error: message });
    }
};
const deleteUser = async (req, res) => {
    try {
        await user_2.default.deleteUser(Number(req.params.id));
        res.json({ message: "User Deleted successfully" });
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        res.status(400).json({ error: message });
    }
};
exports.default = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
