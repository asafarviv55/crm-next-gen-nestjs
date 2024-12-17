import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Replace with your database host
      port: 3306, // Default MySQL port
      username: 'root', // Your MySQL username
      password: 'Wvyf3691!', // Your MySQL password
      database: 'crm-next-gen', // Replace with your database name
      entities: [], // We'll add entity classes here later
      synchronize: true, // Auto-sync schema (set to false in production)
    }),
  ],
})
export class DatabaseModule {}