import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') taskId: string) {
    return this.tasksService.getTaskById(taskId);
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Put(':id')
  updateTask(@Param('id') taskId: string, @Body() updateTask: UpdateTaskDto) {
    return this.tasksService.updateTask(taskId, updateTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') taskId: string) {
    this.tasksService.deleteTask(taskId);
  }
}
