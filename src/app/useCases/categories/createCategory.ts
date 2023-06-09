import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
	//res.send('Ok post category');
	const {icon, name} = req.body;
	const category = await Category.create({icon, name});
	res.json(category);
}

// utilizar o insomnia para fazer o create categoria (post) e o list categoria (get)