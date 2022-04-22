import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { BookService } from './book-service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private bookService: BookService) {}

  // @Get()
  // findAll(@Req() request: Request, @Res() res: Response) {
  //   //console.log(request);
  //   res.send('All the books');
  // }

  // Another option
  // @Get()
  // findAll(@Res({ passthrough: true }) res: Response) {
  //   //console.log(request);
  //   res.status(HttpStatus.I_AM_A_TEAPOT);
  //   return this.bookService.findAll();
  // }

  @Get()
  async findAll(): Promise<Book[]> {
    //console.log(request);
    return this.bookService.findAll();
  }

  @Get(':id/:sub_id')
  findBookById(@Param() params): string {
    return `Book with id: ${params.id} & sub_id: ${params.sub_id}`;
  }

  @Post()
  @HttpCode(204)
  async create(@Body() book: Book): Promise<string> {
    this.bookService.create(book);
    console.log(book);
    return `New book created with name ${book.name}`;
  }

  @Get('random/ab*cd')
  findAny() {
    return 'This route uses a wildcard';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes the book with book-id: ${id}`;
  }
}
