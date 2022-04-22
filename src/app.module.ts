import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { LoggerMiddleware } from './logger.middleware';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, BooksModule, PostsModule],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('books');
  }
}
