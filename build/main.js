"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
var ejs = __importStar(require("ejs"));
var path_1 = __importDefault(require("path"));
var clearThumbCache_1 = __importDefault(require("./utilities/clearThumbCache"));
//import resizeImage from "./utilities/fileReader"
var fs_1 = __importDefault(require("fs"));
dotenv.config();
var app = (0, express_1.default)();
var port = 3000 || process.env.PORT;
app.engine('html', ejs.renderFile);
// Clear "Cache" Thumb Folder on Start
var thumbDir = path_1.default.join(__dirname, '..', 'images/thumb/');
(0, clearThumbCache_1.default)(thumbDir);
// Create on sample Resizing Image for Jasmin Testing - after clearing
var backupDir = path_1.default.join(__dirname, '..', 'images/backup/');
//resizeImage(fullDir, "fjord", 200, 200);
fs_1.default.copyFile(backupDir + 'fjord-200-200.jpg', thumbDir + 'fjord-200-200.jpg', function (err) {
    if (err)
        throw err;
    console.log('sample File copied to Thumbfolder');
});
// Import Routes
var index_1 = __importDefault(require("./routes/index"));
app.use('/api', index_1.default);
// Test Path
app.get('/', function (req, res) {
    res.render(path_1.default.join(__dirname, '..', 'public/index.html'), { name: "Hello Image Resize Friends" });
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
exports.default = app;
