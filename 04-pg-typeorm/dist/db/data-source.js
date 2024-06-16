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
exports.initDataSource = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../users/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [User_1.User],
});
const initDataSource = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.AppDataSource.initialize();
    console.log('Data Source has been initialized!');
});
exports.initDataSource = initDataSource;
(0, exports.initDataSource)().catch((err) => {
    console.log('Error during Data Source initialization', err);
});
