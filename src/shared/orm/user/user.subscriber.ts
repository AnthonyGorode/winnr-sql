/* eslint-disable @typescript-eslint/camelcase */
import { User } from './user.entity';
import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from "typeorm";
import bcrypt = require('bcrypt');

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    listenTo() {
        return User;
    }

    async beforeInsert(event: InsertEvent<User>) {
        event.entity.password_user = await bcrypt.hash(event.entity.password_user,10);
    }

}