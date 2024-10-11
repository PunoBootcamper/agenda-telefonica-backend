import { Request, Response } from "express";
import contacts from "../data/contacts";

export const getContacts = (req: Request, res: Response) => {
  res.json(contacts);
};

export const getContact = (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
        res.json(contact);
    } else {
        res.status(404).send("Contact not found");
    }
}
export const getInfo = (req: Request, res: Response) => {
  const info = `
        <p>Phonebook has info for ${contacts.length} people</p>
        <p>${new Date()}</p>`;
  res.send(info);
};
