"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router_js_1 = __importDefault(require("./router.js"));
app.use(express_1.default.json());
app.use('/users', router_js_1.default);
app.get('/', (req, res) => {
    res.send('hello from express server');
});
exports.default = app;
