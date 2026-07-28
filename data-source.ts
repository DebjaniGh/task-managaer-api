// data-source.ts
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Task } from './src/tasks/entities/task.entity';
import { User } from './src/users/entities/user.entity';
config(); // loads .env manually, since Nest's ConfigModule isn't running here

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Task, User], // Add User entity here
  migrations: ['migrations/*.ts'],
});
