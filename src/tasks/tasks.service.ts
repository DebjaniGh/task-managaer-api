import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  /** without using an database */
  // private tasks: Task[] = [
  //   { id: 1, title: 'Sample Task 1', completed: false },
  //   { id: 2, title: 'Sample Task 2', completed: false },
  // ];

  // findAll(): Task[] {
  //   return this.tasks;
  // }

  // findOne(id: number) {
  //   const task = this.tasks.find((task) => task.id === id);
  //   if (!task) {
  //     throw new NotFoundException(`Task with ID ${id} not found`);
  //   }
  //   return task;
  // }

  // create(createTaskDto: CreateTaskDto): Task {
  //   const nextId = this.tasks.length ? this.tasks.length + 1 : 1;
  //   const newTask: Task = {
  //     id: nextId,
  //     title: createTaskDto.title,
  //     completed: createTaskDto.completed ?? false,
  //   };
  //   this.tasks.push(newTask);
  //   return newTask;
  // }

  // update(id: number, updateTaskDto: UpdateTaskDto): Task {
  //   const task = this.findOne(id);
  //   Object.assign(task, updateTaskDto);
  //   return task;
  // }

  /** now using a database */
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  create(dto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create(dto); // builds an entity instance (not yet saved)
    return this.tasksRepository.save(task); // actually persists it in db
  }
}
