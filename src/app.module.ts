import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { LoggerMiddleware } from './logger.middleware';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [ BooksModule, PostsModule, AuthModule, UsersModule],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('books');
  }
}
