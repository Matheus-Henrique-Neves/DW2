"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Classes/Pessoa"));
const Pessoa1 = new Pessoa_1.default('João', 25, ["jogar", "dormir", "comer"]);
const Pessoa2 = new Pessoa_1.default('Maria', 30, ["correr", "nadar", "pular"]);
Pessoa1.apresentacao();
Pessoa2.apresentacao();
