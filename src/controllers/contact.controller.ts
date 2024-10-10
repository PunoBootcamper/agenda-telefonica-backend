import { Request, Response } from 'express';
import contacts from '../data/contacts';

export const getContacts = (req: Request, res: Response) => {
    res.json(contacts);
}