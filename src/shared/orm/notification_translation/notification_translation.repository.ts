import { EntityRepository, Repository } from "typeorm";
import { NotificationTranslation } from "./notification_translation.entity";

@EntityRepository(NotificationTranslation)
export class NotificationTranslationRepository extends Repository<NotificationTranslation> {

}