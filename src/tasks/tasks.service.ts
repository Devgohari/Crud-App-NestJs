import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { createTasksDTO } from './dto/create-task-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }
  getAllTaskWithFilers(): Task[] {
    // cosnt 
    return this.tasks;
  }

  createTasks(createTasksDTO: createTasksDTO): Task {
    const { title, description } = createTasksDTO;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  getTaskById(id: string): Task {
    const task: Task = this.tasks.find((item) => item.id == id);
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }
  deleteTaskById(id: string): { message: string } {
    const task: number = this.tasks.findIndex((item) => item.id == id);
    this.tasks = this.tasks.slice(task, 1);
    return { message: 'Task deleted' };
  }
  updateTaskById(id: string, status: string): Task {
    const task = this.getTaskById(id);
    task.status = TaskStatus[status];
    return task;
  }
}
