import { Injectable } from '@nestjs/common';
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async all(): Promise<User[]> {
        return this.userRepository.find();
    }

    create(data): Promise<User> {
        return this.userRepository.save(data);
    }

    findOneBy(condition): Promise<User> { // učitl je tu dau findOne, sam men ni delalo
        return this.userRepository.findOneBy(condition);
    }

    async update(id, data): Promise<User> {
        await this.userRepository.update(id, data);
        return this.findOneBy({id});
    }

    delete(id: number): Promise<any> {
        return this.userRepository.delete(id);
    }

}
