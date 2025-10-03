"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userData = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "User Name Cannot Be Empty" })
});
exports.default = { userData };
