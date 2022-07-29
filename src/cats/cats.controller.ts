import { Controller, ForbiddenException, Get, HttpStatus, Param, ParseIntPipe, ServiceUnavailableException, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { SquarePipe } from './pipes/square.pipe';

@Controller('cats')
export class CatsController {

  @Get()
  // when using global filter in main.ts, below is not required.
  // app.useGlobalFilters(new HttpExceptionFilter()) 
  // @UseFilters(new HttpExceptionFilter())
  async create() {
    console.log('this will generate exception');
    throw new ForbiddenException();
  }

  @Get('/er1')
  @UseFilters(new AllExceptionsFilter())
  async er1() {
    console.log('this will generate exception');
    throw new ServiceUnavailableException();
  }

  @Get('/parse/:id')
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return 'this number is ' + id;
  }

  @Get('/square/:num')
  async square(@Param('num', SquarePipe) num: number) {
    return 'squared number  is ' + num;
  }

}

