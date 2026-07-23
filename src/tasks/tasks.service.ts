import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: { id: number; title: string }[] = [
    { id: 1, title: 'Sample Task 1' },
    { id: 2, title: 'Sample Task 2' },
  ];
  private nextId: number = 1;

  findAll(): { id: number; title: string }[] {
    return this.tasks;
  }

  create(title: string): { id: number; title: string } {
    const newTask = { id: this.nextId++, title };
    this.tasks.push(newTask);
    return newTask;
  }
}
