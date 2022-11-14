import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createTasksDTO } from './dto/create-task-dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTask();
  }
  @Post()
  createTaks(@Body() createTasksDTO: createTasksDTO) {
    return this.tasksService.createTasks(createTasksDTO);
  }

  @Get(':id')
  GetTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }
  @Delete(':id')
  deleteTaskById(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }
  @Patch(':id')
  updateTaskById(@Param('id') id: string, @Body('status') status: string) {
    return this.tasksService.updateTaskById(id, status);
  }
}

