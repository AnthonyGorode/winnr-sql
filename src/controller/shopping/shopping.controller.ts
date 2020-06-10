/* eslint-disable @typescript-eslint/camelcase */
import { ShoppingService } from './shopping.service';
import { Controller, Post, HttpCode, Body, Delete, Get, Param } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { DeleteProductOrderDto } from './dto/delete-product-order.dto';

@Controller('shopping')
export class ShoppingController {

    constructor(
        private readonly shoppingService: ShoppingService
    ) {}

    @Get(':id')
    @HttpCode(200)
    showOrderDetails(@Param('id') id_order: string) {
        return this.shoppingService.getOrderById(+id_order);
    }

    @Post()
    @HttpCode(201)
    makeNewOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.shoppingService.createOrder(createOrderDto.id_user, createOrderDto.id_products);
    }

    @Delete()
    @HttpCode(200)
    deleteProductOrder(@Body() deleteProductOrderDto: DeleteProductOrderDto) {
        const { id_order, id_product } = deleteProductOrderDto;
        return this.shoppingService.deleteProductOrder(id_order, id_product);
    }

}
