import { EntityRepository, Repository } from "typeorm";
import { OrderProduct } from "./order_product.entity";

@EntityRepository(OrderProduct)
export class OrderProductRepository extends Repository<OrderProduct> {}