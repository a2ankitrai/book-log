import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book-service';

describe('BookService', () => {
  let provider: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService],
    }).compile();

    provider = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
