import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book-service';
import { BooksController } from './books.controller';

describe('BooksController', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BookService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined(); 
  });

});
