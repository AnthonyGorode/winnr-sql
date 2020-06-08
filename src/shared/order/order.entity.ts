/* eslint-disable @typescript-eslint/camelcase */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, BeforeInsert } from "typeorm";
import { OrderProduct } from "../order_product/order_product.entity";
import { User } from "../user/user.entity";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id_order: number;

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({ name: 'id_user' })
    user: User;

    @OneToMany(() => OrderProduct, orderProduct => orderProduct.order)
    productsOrdered: OrderProduct[];

    @Column({ length: 10 })
    number_order: string;

    @Column({ length: 300 })
    status_order: string;

    @Column({ type: "datetime" })
    ordered_at: Date;

    @Column("decimal",{precision: 10, scale: 2})
    gross_price_order: number;

    @Column({ length: 255 })
    pdf_url_order: string;

    @BeforeInsert()
    addTimeStamp() {
        this.ordered_at = new Date();
    }
}