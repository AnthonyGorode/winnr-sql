/* eslint-disable @typescript-eslint/camelcase */
import { UserRepository } from './../../shared/user/user.repository';
import { User } from './../../shared/user/user.entity';
import { OrderProductRepository } from './../../shared/order_product/order_product.repository';
import { OrderProduct } from './../../shared/order_product/order_product.entity';
import { ProductRepository } from './../../shared/product/product.repository';
import { Product } from './../../shared/product/product.entity';
import { OrderRepository } from './../../shared/order/order.repository';
import { Order } from './../../shared/order/order.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShoppingService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: OrderRepository,
        @InjectRepository(User)
        private readonly userRepository: UserRepository,
        @InjectRepository(Product)
        private readonly productRepository: ProductRepository,
        @InjectRepository(OrderProduct)
        private readonly orderProductRepository: OrderProductRepository
    ) {}

    public async getOrderById(id_order: number): Promise<Order> {
        return await this.orderRepository.selectSpecificOrder(id_order);
    }

    public async createOrder(id_user: number, id_products: number[]): Promise<Order> {
        try {
            const user: User = await this.userRepository.findOne({ id_user });
    
            const products: Product[] = [];
            for (const id_product of id_products) {
                const product = await this.productRepository.findOne({ id_product });
                products.push(product);
            }

            const order: Order = this.orderRepository.create();
            order.number_order = "B43456ABC";
            order.pdf_url_order = "azety12434.pdf";
            order.status_order = "PAYMENT ACCEPTED",
            order.gross_price_order = 0.00;
            order.user = user;
            const newOrder: Order = await this.orderRepository.save(order);

            const orderProduct: OrderProduct = this.orderProductRepository.create();
            let totalPrice = 0.00;
            for (const product of products) {
                orderProduct.order = newOrder;
                orderProduct.product = product;
                orderProduct.quantity = 1;
                totalPrice += +product.recommanded_price_product || +product.price_product;
                await this.orderProductRepository.save(orderProduct);
            }

            await this.orderRepository.update(newOrder.id_order, {gross_price_order: totalPrice});

            return await this.orderRepository.selectSpecificOrder(newOrder.id_order);
        } catch (error) {
            console.log(error);
        }
    }

    public async deleteProductOrder(id_order: number, id_product: number): Promise<any> {
        try {
            const order = await this.orderRepository.findOne({id_order});
            const product = await this.productRepository.findOne({id_product});

            this.orderProductRepository.delete({order, product});

            order.gross_price_order -= +product.recommanded_price_product || +product.price_product;

            return {message: `Product ${product.name_product} was deleted successfully.`};
        } catch (error) {
            console.log(error);
        }
    }
}
