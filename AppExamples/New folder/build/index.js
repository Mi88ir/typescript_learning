"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const matches = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "football.csv"), {
    encoding: "utf8",
});
console.log(matches);
