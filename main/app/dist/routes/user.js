"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
const router = (0, express_1.Router)();
router.post("/", user_1.default.createUser);
router.get("/", user_1.default.getAllUsers);
router.get("/:id", user_1.default.getUserById);
router.put("/:id", user_1.default.updateUser);
router.delete("/:id", user_1.default.deleteUser);
exports.default = router;
