"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get("/", async ({ view }) => view.render("welcome"));
Route_1.default.get("/second", async ({ view }) => view.render("second"));
//# sourceMappingURL=routes.js.map