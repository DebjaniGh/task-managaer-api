import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [TasksModule, StatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
