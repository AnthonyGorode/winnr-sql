/* eslint-disable @typescript-eslint/camelcase */
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

/**
 * Provide all apis to select and manage users
 *
 * @export
 * @class UserRepository
 * @extends {Repository<User>}
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
    /**
     * Select and join a specific user with
     * his notifications & billing and delivery address
     *
     * @param {number} id_user user id
     * @returns {Promise<User>} return the user details
     * @memberof UserRepository
     */
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