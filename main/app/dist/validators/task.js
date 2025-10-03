"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const taskData = zod_1.default.object({
    name: zod_1.default.string(),
    description: zod_1.default.string(),
    estimatedDate: zod_1.default.coerce.date().optional(),
    users: zod_1.default
        .object({
        userId: zod_1.default.number(),
        roleId: zod_1.default.number(),
    })
        .array(),
});
exports.default = { taskData };
