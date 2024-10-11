import { Router } from "express";
import { getContacts, getContact } from "../controllers/contact.controller";

const router = Router();

router.get("/persons", getContacts);
router.get("/persons/:id", getContact);
router.post("/persons", (req, res) => {
    res.send("This is a test post");
});

export default router;