"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
exports.default = {
    dbName: process.env.DB_NAME,
    type: "postgresql",
    entities: [Post_1.Post],
    debug: process.env.NODE_ENV !== "production",
    allowGlobalContext: true,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
};
//# sourceMappingURL=mikro-orm.config.js.map