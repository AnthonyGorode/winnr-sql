import { ProductsService } from './../services/products.service';
import { Controller, Get } from '@nestjs/common';
import { Product } from '../models/product.model';

@Controller('products')
export class ProductsController {
    constructor(
        private productService: ProductsService
    ) { }

    @Get()
    public async allProducts(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }
}
