import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { createTasksDTO } from './dto/create-task-dto';
import { GetFilterTaskDTO } from './dto/get-tasks-filter-dto';
import { UpdateTaskStatusDTO } from './dto/update-task-dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filerDTO: GetFilterTaskDTO): Task[] {
    if (Object.keys(filerDTO).length) {
      // here we have to implement search function
      // start with 03 - Validation and Error Handling
      return this.tasksService.getAllTask();
    } else {
      return this.tasksService.getAllTask();
    }
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
  updateTaskById(
    @Param('id') id: string,
    @Body() UpdateTaskStatusDTO: UpdateTaskStatusDTO,
  ) {
    const { status } = UpdateTaskStatusDTO;
    return this.tasksService.updateTaskById(id, status);
  }
}
