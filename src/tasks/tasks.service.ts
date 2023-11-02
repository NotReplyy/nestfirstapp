import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 as uuid } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First task',
      description: 'First task description',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(id: string, updateTask: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateTask);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
