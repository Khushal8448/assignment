"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
// app.use(express.json());
app.get("/", function (req, res) {
    res.json("Hi, your application is running...");
});
// app.use("/api/user", userRoutes);
var PORT = process.env.PORT || 6000;
app.listen(PORT, console.log("Server started on PORT --".concat(PORT)));
//# sourceMappingURL=server.js.map