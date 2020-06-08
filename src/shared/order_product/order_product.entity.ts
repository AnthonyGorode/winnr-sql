import { Product } from './../product/product.entity';
import { Entity, ManyToOne, JoinColumn, Column } from "typeorm";
import { Order } from "../order/order.entity";

@Entity()
export class OrderProduct {

    @ManyToOne(() => Order, order => order.productsOrdered, { primary: true })
    @JoinColumn({ name: 'id_order' })
    order: Order;

    @ManyToOne(() => Product, product => product.ordersProduct, { primary: true })
    @JoinColumn({ name: 'id_product' })
    product: Product;

    @Column('int')
    quantity: number;

}