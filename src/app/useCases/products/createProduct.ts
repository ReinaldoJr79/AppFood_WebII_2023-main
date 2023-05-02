import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
	//res.send('Ok post category');
    const imagePath = req.file?.filename;
	const {name, description, price, category, ingredients} = req.body;
	const product = await Product.create({
        name,
        description,
        imagePath,
        price: Number(price),
        category,
        ingredients
    });
	
}

// utilizar o insomnia para fazer o create categoria (post) e o list categoria (get)