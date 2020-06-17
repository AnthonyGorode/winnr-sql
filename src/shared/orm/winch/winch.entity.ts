import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
// import { Association } from "../association/association.entity";
import { BattleRoyale } from "../battle_royale/battle_royale.entity";
import { Association } from "../association/association.entity";

@Entity()
export class Winch {

    @PrimaryGeneratedColumn()
    id_winch: number;

    @ManyToOne(() => Association, association => association.winch)
    @JoinColumn({ name: 'id_association' })
    association: Association;

    @OneToMany(() => BattleRoyale, battleRoyale => battleRoyale)
    battleRoyale: BattleRoyale[];

    @Column({ type: 'datetime' })
    created_at: string;

    @Column("decimal",{precision: 10, scale: 2})
    total_winch: number;

    @Column("tinyint")
    expired_winch: number;

    @Column({ type: 'datetime' })
    expired_at: string;

}