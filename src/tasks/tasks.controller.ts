import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks') // sets the base route: /tasks
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findALl() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() body: { title: string }) {
    return this.tasksService.create(body.title);
  }
}
