import { Module } from '@nestjs/common';
import { BookService } from './book-service';
import { BooksController } from './books.controller';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BookService],
  exports: [BookService],
})
export class BooksModule {}
