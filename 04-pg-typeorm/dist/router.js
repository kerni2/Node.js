"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_js_1 = __importDefault(require("./users/UsersController.js"));
const router = (0, express_1.Router)();
router.post('/', UsersController_js_1.default.create);
router.get('/', UsersController_js_1.default.findAll);
router.get('/:id', UsersController_js_1.default.findOne);
router.put('/:id', UsersController_js_1.default.updateOne);
router.delete('/:id', UsersController_js_1.default.deleteOne);
exports.default = router;
