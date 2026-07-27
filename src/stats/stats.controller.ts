import { Controller, Get } from '@nestjs/common';
import { TasksService } from 'src/tasks/tasks.service';

@Controller('stats/count') // sets the base route: /stats/count
export class StatsController {
  constructor(private readonly tasksService: TasksService) {}

  // @Get()
  // getStats() {
  //   return this.tasksService.findAll().length;
  // }
}
