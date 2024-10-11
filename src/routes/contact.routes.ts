import { Router } from "express";
import { getContacts, getContact, deleteContact, addContact } from "../controllers/contact.controller";

const router = Router();

router.get("/persons", getContacts);
router.get("/persons/:id", getContact);
router.delete("/persons/:id", deleteContact);
router.post("/persons", addContact);

export default router; 