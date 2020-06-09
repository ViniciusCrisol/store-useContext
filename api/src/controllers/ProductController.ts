import { Request, Response } from 'express';
import knex from '../database/connections';

class PointsController {
  async index(request: Request, response: Response) {
    const products = await knex('products').select('products.*');

    const serializedProducts = products.map((product) => {
      return {
        ...product,
        image_url: `http://192.168.100.6:3333/uploads/${product.image}`,
      };
    });

    return response.json(serializedProducts);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const product = await knex('products').where('id', id).first();

    if (!product) {
      return response.status(400).json({ error: 'Ponto não encontrado' });
    }

    const serializedProducts = {
      ...product,
      image_url: `http://192.168.100.6:3333/uploads/${product.image}`,
    };

    return response.json(serializedProducts);
  }

  async create(request: Request, response: Response) {
    const { name, price, category, availability } = request.body;

    const product = {
      image: request.file.filename,
      name,
      price,
      category,
      availability,
    };

    const image_url = `http://localhost:3333/uploads/${product.image}`;

    try {
      await knex('products').insert(product);
      return response.json({ product, image_url });
    } catch (err) {
      return response.status(404).json({ error: true });
    }
  }
}

export default PointsController;
