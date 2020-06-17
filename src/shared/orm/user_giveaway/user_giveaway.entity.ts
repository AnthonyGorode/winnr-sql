import { Entity, ManyToOne, JoinColumn, Column } from "typeorm";
import { Giveaway } from "../giveaway/giveaway.entity";
import { User } from "../user/user.entity";

@Entity()
export class UserGiveaway {

    @ManyToOne(() => User, user => user.giveawayPlayed, {primary: true})
    @JoinColumn({ name: 'id_user' })
    user: User;

    @ManyToOne(() => Giveaway, giveaway => giveaway.userPlayed, {primary: true})
    @JoinColumn({ name: 'id_giveaway' })
    giveaway: Giveaway;

    @Column({ type: 'datetime' })
    started_at: string;

    @Column("int")
    tickets_spent: number;

    @Column("tinyint")
    winnr: number; 

}