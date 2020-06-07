import { EntityRepository, Repository } from 'typeorm';
import { Platform } from '../platform/platform.entity';

@EntityRepository(Platform)
export class PlatformRepository extends Repository<Platform> {

}