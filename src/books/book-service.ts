import { Injectable } from '@nestjs/common';
import { BooksModule } from './books.module';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  create(book: Book) {
    this.books.push(book);
  }

  findAll(): Book[] {
    if (this.books.length == 0) {
      this.fillBooks();
    }
    return this.books;
  }

  fillBooks() {
    const book1: Book = {
      name: 'Harry Potter',
      author: 'J.K. Rowling',
      year: 2001,
    };

    this.books.push(book1);
  }
}
