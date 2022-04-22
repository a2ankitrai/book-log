import { Controller, Get } from '@nestjs/common';
import { BookService } from 'src/books/book-service';

@Controller('users')
export class UsersController {
  constructor(private bookService: BookService) {}

  @Get()
  getBooksForUser(): string {
    const books = this.bookService.findAll();
    return JSON.stringify(books[0]);
  }
}
