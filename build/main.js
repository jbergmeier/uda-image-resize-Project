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
dotenv.config();
var app = (0, express_1.default)();
var port = 3000 || process.env.PORT;
app.engine('html', ejs.renderFile);
// Clear Thumb Dir
var thumbDir = path_1.default.join(__dirname, '..', 'images/thumb/');
(0, clearThumbCache_1.default)(thumbDir);
// Import Routes
var index_1 = __importDefault(require("./routes/index"));
app.use('/api', index_1.default);
// Test Path
app.get('/', function (req, res) {
    res.render(path_1.default.join(__dirname, '..', 'public/index.html'), {
        name: 'Hello Image Resize Friends'
    });
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
exports.default = app;
