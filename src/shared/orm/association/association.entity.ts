import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Winch } from "../winch/winch.entity";

@Entity()
export class Association {

    @PrimaryGeneratedColumn()
    id_association: number;

    @OneToMany(() => Winch, winch => winch.association)
    winch: Winch[];

    @Column({ length: 255 })
    name_association: string;

}