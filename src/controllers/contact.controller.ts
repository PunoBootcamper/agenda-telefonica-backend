import { Request, Response, RequestHandler } from "express";

type Contacts = {
  id: number;
  name: string;
  number: string;
};

let contacts: Contacts[] = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

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
};

export const deleteContact = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = contacts.findIndex(p => p.id === id);
  
    if (index !== -1) {
      contacts.splice(index, 1);
      res.status(204).end();
    } else {
      res.status(404).send({ error: 'Person not found' });
    }
};

export const addContact: RequestHandler = (req: Request, res: Response) => {
  const { name, number } = req.body;
  if (!name || !number) {
    res.status(400).json({
      error: "Name or number is missing",
    });
    return;
  }
  if (contacts.find((contact) => contact.name === name)) {
    res.status(400).json({
      error: "Name must be unique",
    });
    return;
  }
  const newContact: Contacts = {
    id: Math.floor(Math.random() * 1000),
    name,
    number,
  };
  contacts.push(newContact);
  res.json(newContact);
  return;
};

export const getInfo = (req: Request, res: Response) => {
  const info = `
        <p>Phonebook has info for ${contacts.length} people</p>
        <p>${new Date()}</p>`;
  res.send(info);
};
