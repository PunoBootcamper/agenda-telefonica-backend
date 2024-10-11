"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContacts = void 0;
const contacts_1 = __importDefault(require("../data/contacts"));
const getContacts = (req, res) => {
    res.json(contacts_1.default);
};
exports.getContacts = getContacts;
