"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var clearThumbDir = function (thumbDir) {
    fs_1.default.readdir(thumbDir, function (err, files) {
        if (err)
            throw err;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            fs_1.default.unlink(path_1.default.join(thumbDir, file), function (err) {
                if (err)
                    throw err;
            });
        }
    });
};
exports.default = clearThumbDir;
