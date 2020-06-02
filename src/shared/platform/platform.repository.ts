import { EntityRepository, Repository } from 'typeorm';
import { PlatformProduct } from '../platform/platform.entity';

@EntityRepository(PlatformProduct)
export class PlatformRepository extends Repository<PlatformProduct> {

}