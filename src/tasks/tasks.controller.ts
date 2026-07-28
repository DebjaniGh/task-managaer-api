import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { CurrentUser } from 'src/auth/current-user.decorator';

@UseGuards(AuthGuard('jwt')) // applies the jwt guard to all routes in this controller
@Controller('tasks') // sets the base route: /tasks
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findALl() {
    return this.tasksService.findAll();
  }

  @Get('mine')
  findMine(@CurrentUser() user: { userId: number; email: string }) {
    return this.tasksService.findByUser(user.userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(
    @Body() createTaskDto: CreateTaskDto,
    @CurrentUser() user: { userId: number; email: string },
  ) {
    return this.tasksService.create(createTaskDto, user.userId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}
