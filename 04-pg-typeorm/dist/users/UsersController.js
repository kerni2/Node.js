"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_data_js_1 = require("../db/pg-data.js");
class UsersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, pg_data_js_1.addUser)(req.body);
                res.status(201).json(result);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, pg_data_js_1.getUsers)();
                res.json(result);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, pg_data_js_1.getUserById)(+req.params.id);
                res.json(result);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, pg_data_js_1.updateUser)(+req.params.id, req.body);
                res.json(result);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, pg_data_js_1.deleteUser)(+req.params.id);
                res.json(result);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = new UsersController();
