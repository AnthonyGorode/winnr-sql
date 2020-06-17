import { User } from './../user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id_address: number;

    @ManyToOne(() => User, user => user.billingAddress)
    @JoinColumn({ name: 'id_user_billing_address'})
    userBilling: User;

    @ManyToOne(() => User, user => user.deliveryAddress)
    @JoinColumn({ name: 'id_user_delivery_address'})
    userDelivery: User;

    @Column({ length: 500 })
    street_address: string;

    @Column({ length: 10 })
    zipe_code_address: string;

    @Column({ length: 300 })
    city_address: string;

    @Column({ length: 300 })
    state_address: string;

    @Column({ length: 300 })
    country_address: string;

    @Column("decimal",{precision: 2, scale: 2})
    tax_country_address: number;

}