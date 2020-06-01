import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

const products: Product[] = [
    {
        name: 'Witcher 3: Wild Blunt',
        price: 30.00
    },
    {
        name: 'Grand Theft Auto 5',
        price: 30.00
    },
    {
        name: 'Tomb Raider',
        price: 30.00
    },
    {
        name: 'Destiny 2',
        price: 30.00
    },
    {
        name: 'Red Dead Redemption II',
        price: 30.00
    },
    {
        name: 'Assassin\'s Creed Valhalla',
        price: 30.00
    },
    {
        name: 'FIFA 20',
        price: 30.00
    },
    {
        name: 'The Elder Scroll VI',
        price: 30.00
    },
];

@Injectable()
export class ProductsService {

    public getAllProducts(): Promise<Product[]> {
        return new Promise((resolve,reject) => {
            try {
                resolve(products);
            } catch (error) {
                reject(error);
            }
        });
    }
}
