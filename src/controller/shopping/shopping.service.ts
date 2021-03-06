import { ErrorHandlerService } from './../../shared/services/errors-handler.service';
/* eslint-disable @typescript-eslint/camelcase */
import { UserRepository } from './../../shared/orm/user/user.repository';
import { User } from './../../shared/orm/user/user.entity';
import { OrderProductRepository } from './../../shared/orm/order_product/order_product.repository';
import { OrderProduct } from './../../shared/orm/order_product/order_product.entity';
import { ProductRepository } from './../../shared/orm/product/product.repository';
import { Product } from './../../shared/orm/product/product.entity';
import { OrderRepository } from './../../shared/orm/order/order.repository';
import { Order } from './../../shared/orm/order/order.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * Provide all operations about shopping :
 * product, order, user
 *
 * @export
 * @class ShoppingService
 */
@Injectable()
export class ShoppingService {
  /**
   * Creates an instance of ShoppingService.
   * @param {OrderRepository} orderRepository
   * @param {UserRepository} userRepository
   * @param {ProductRepository} productRepository
   * @param {OrderProductRepository} orderProductRepository
   * @memberof ShoppingService
   */
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: OrderRepository,
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    @InjectRepository(Product)
    private readonly productRepository: ProductRepository,
    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: OrderProductRepository,
    private readonly errorsHandlerService: ErrorHandlerService,
  ) {}

  /**
   * Get a order according to his id
   * @param id_order
   */
  public async getOrderById(id_order: number): Promise<Order> {
    try {
      return await this.orderRepository.selectSpecificOrder(id_order);
    } catch (error) {
      this.errorsHandlerService.internalError(error.message);
    }
  }

  /**
   * Get a order according to his id
   * @param id_order
   */
  public async getOrderByName(name_product: string): Promise<Product> {
    try {
      return await this.productRepository.findByName(name_product);
    } catch (error) {
      this.errorsHandlerService.internalError(error.message);
    }
  }

  /**
   * Create a order
   * @param id_user user id
   * @param id_products array product ids
   */
  public async createOrder(
    id_user: number,
    id_products: number[],
  ): Promise<Order> {
    try {
      const user: User = await this.userRepository.findOne({ id_user }); // find user who ordered

      const products: Product[] = [];
      for (const id_product of id_products) {
        const product = await this.productRepository.findOne({ id_product }); // find each product concerned by the order
        products.push(product);
      }

      const order: Order = this.orderRepository.create();
      order.number_order = 'B43456ABC';
      order.pdf_url_order = 'azety12434.pdf';
      order.status_order = 'PAYMENT ACCEPTED';
      order.gross_price_order = 0.0;
      order.user = user; // add the user instance
      const newOrder: Order = await this.orderRepository.save(order); // create the order

      const orderProduct: OrderProduct = this.orderProductRepository.create();
      let totalPrice = 0.0;
      for (const product of products) {
        orderProduct.order = newOrder;
        orderProduct.product = product;
        orderProduct.quantity = 1;
        totalPrice +=
          +product.recommanded_price_product || +product.price_product;
        await this.orderProductRepository.save(orderProduct); // save all products concerned by the order
      }

      await this.orderRepository.update(newOrder.id_order, { // update the order price
        gross_price_order: totalPrice,
      });

      return await this.orderRepository.selectSpecificOrder(newOrder.id_order); // return the new order created
    } catch (error) {
      this.errorsHandlerService.internalError(error.message);
    }
  }

  /**
   * Delete product for a specific order
   * caculate the new order price
   *
   * @param {number} id_order order id
   * @param {number} id_product product id
   * @returns {Promise<any>} return a successfully message
   * @memberof ShoppingService
   */
  public async deleteProductOrder(
    id_order: number,
    id_product: number,
  ): Promise<any> {
    try {
      const order = await this.orderRepository.findOne({ id_order });
      const product = await this.productRepository.findOne({ id_product });

      this.orderProductRepository.delete({ order, product });

      order.gross_price_order -=
        +product.recommanded_price_product || +product.price_product;

      return {
        message: `Product ${product.name_product} was deleted successfully.`,
      };
    } catch (error) {
      this.errorsHandlerService.internalError(error.message);
    }
  }
}
