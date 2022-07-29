import { Body, Controller, ForbiddenException, Get, HttpStatus, Param, ParseIntPipe, Post, ServiceUnavailableException, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { RolesGuard } from './guards/role.guard';
import { ExcludeNullInterceptor } from './interceptors/exclude-null.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { SquarePipe } from './pipes/square.pipe';
import { Roles } from './roles.decorator';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Get()
  // when using global filter in main.ts, below is not required.
  // app.useGlobalFilters(new HttpExceptionFilter()) 
  // @UseFilters(new HttpExceptionFilter())
  async createException() {
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

  @Get('/guard')
  @UseGuards(RolesGuard)
  async guardCheck() {
    return 'this is guard protected';
  }

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('/null_empty')
  @UseInterceptors(ExcludeNullInterceptor)
  async null_interceptor() {
    return null;
  }

}

