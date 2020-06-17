import { Product } from './../product/product.entity';
import { JoinColumn, ManyToOne, Column, Entity, OneToOne } from "typeorm";
import { Developer } from '../developer/developer.entity';

@Entity()
export class Game {

    @OneToOne(() => Product, { primary: true })
    @JoinColumn({ name: "id_product" })
    product: Product;

    @ManyToOne(() => Developer, developer => developer.games)
    @JoinColumn({ name: 'id_developer' })
    developer: Developer;

    @Column('int')
    edition_game: number;

}