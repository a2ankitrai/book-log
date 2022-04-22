import { Module } from '@nestjs/common';
import { BooksModule } from 'src/books/books.module';
import { UsersController } from './users.controller';

@Module({
  imports: [BooksModule],
  controllers: [UsersController],
})
export class UsersModule {}
