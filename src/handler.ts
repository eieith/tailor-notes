import { Request , Response } from 'express';

export const indexpageGetHandler = (_ : Request, res : Response) => {
    res.render('index');
};