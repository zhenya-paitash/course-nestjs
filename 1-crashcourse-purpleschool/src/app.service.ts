import { Inject, Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('TEST_VALUE') private test: string,
    private readonly databaseService: DatabaseService,
  ) {}

  getUserById(id: number) {
    return this.databaseService['user']?.findFirst({});
  }

  getUsers() {
    console.log(this.test);
    return this.databaseService['user']?.findMany({});
  }

  createUser(dto: CreateDto) {
    return this.databaseService['user'].create({ data: dto });
  }
}
