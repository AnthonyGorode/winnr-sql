import { User } from './../user/user.entity';
/* eslint-disable @typescript-eslint/camelcase */
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { NotificationTranslation } from '../notification_translation/notification_translation.entity';

@Entity()
export class Notification {

    @PrimaryGeneratedColumn()
    id_notification: number;

    @ManyToOne(() => User, user => user)
    @JoinColumn({ name: 'id_user' })
    user: User;

    @OneToMany(() => NotificationTranslation, notificationTranslation => notificationTranslation.notification)
    translations: NotificationTranslation[];

    @Column({ length: 255 })
    type_notification: string;

    @Column({ length: 300 })
    image_notification: string;

    @Column({ length: 300 })
    status_notification: string;

    @Column({ type: "datetime" })
    created_at: Date;

    @Column({ length: 300 })
    icon_notification: string;

    @BeforeInsert()
    createDate() {
        this.created_at = new Date();
    }

}