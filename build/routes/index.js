"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
var logger_1 = __importDefault(require("../utilities/logger"));
var images_1 = __importDefault(require("./api/images"));
routes.get('/', logger_1.default, function (req, res) {
    console.log('hllo');
    res.send('MAIN');
});
routes.use('/images', images_1.default);
exports.default = routes;
