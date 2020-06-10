/* eslint-disable @typescript-eslint/camelcase */
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
    public selectUserById(id_user: number): Promise<User> {
        return this.findOne({
            join: {
                alias: 'u',
                innerJoinAndSelect: {
                    notifications: 'u.notifications',
                    notificationTranslation: 'notifications.translations',
                    billingAddress: 'u.billingAddress',
                    deliveryAddress: 'u.deliveryAddress'
                }
            },
            where: [
                { id_user }
            ]
        })
    }

}