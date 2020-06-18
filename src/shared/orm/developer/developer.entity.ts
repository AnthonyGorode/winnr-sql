import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Game } from "../game/game.entity";

@Entity()
export class Developer {

    @PrimaryGeneratedColumn()
    id_developer: number;

    @Column({ length: 255 })
    name_developer: string;

    @Column({ length: 255 })
    image_developer: string;

    @OneToMany(() => Game, game => game.developer)
    games: Game[];

}