import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './dto/task.entity';

// @EntityRepository()
@Injectable()
export class TasksRepository extends Repository<Task> {}
