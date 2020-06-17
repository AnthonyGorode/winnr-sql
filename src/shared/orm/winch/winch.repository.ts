import { EntityRepository, Repository } from "typeorm";
import { Winch } from "./winch.entity";

@EntityRepository(Winch)
export class WinchRepository extends Repository<Winch> {
    
}