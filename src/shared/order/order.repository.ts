/* eslint-disable @typescript-eslint/camelcase */
import { EntityRepository, Repository } from "typeorm";
import { Order } from "./order.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {

    public async selectSpecificOrder(id_order: number): Promise<Order> {
        return this.findOne({
            join: {
                alias: 'o',
                innerJoinAndSelect: {
                    user: 'o.user',
                    productsOrdered: 'o.productsOrdered',
                    product: 'productsOrdered.product'
                }
            },
            where: [
                { id_order }
            ]
        });
    }
}