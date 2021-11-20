"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeOfExistingImage = exports.checkIfFileExist = void 0;
var fs_1 = __importDefault(require("fs"));
var image_size_1 = __importDefault(require("image-size"));
var checkIfFileExist = function (fsPathThumbsFile) {
    var fileCheck = fs_1.default.existsSync(fsPathThumbsFile);
    return fileCheck;
};
exports.checkIfFileExist = checkIfFileExist;
var sizeOfExistingImage = function (fsPathThumbsFile, imageWidth, height) {
    var sizeOfImage = (0, image_size_1.default)(fsPathThumbsFile);
    // TODO delete log - Test Tracking
    console.log("File exists");
    console.log("existingFile width: " + sizeOfImage.width);
    console.log("existingFile height: " + sizeOfImage.height);
    return sizeOfImage.width == imageWidth && sizeOfImage.height == height;
};
exports.sizeOfExistingImage = sizeOfExistingImage;
