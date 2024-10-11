"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const router = (0, express_1.Router)();
router.get("/persons", contact_controller_1.getContacts);
router.get("/persons/:id", (req, res) => {
    res.send("This is a test");
});
router.post("/persons", (req, res) => {
    res.send("This is a test post");
});
exports.default = router;
