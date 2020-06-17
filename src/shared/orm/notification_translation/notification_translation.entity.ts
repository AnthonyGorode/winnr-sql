import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Notification } from "../notification/notification.entity";

@Entity()
export class NotificationTranslation {

    @PrimaryGeneratedColumn()
    id_notification_translation: number;

    @ManyToOne(() => Notification, notification => notification)
    @JoinColumn({ name: 'id_notification' })
    notification: Notification;

    @Column({ length: 6 })
    lang_notification_translation: string;

    @Column({ length: 300 })
    title_notification_translation: string;

    @Column("text")
    content_notification_translation: string;

}