import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ModuleController } from './module/module.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ModuleController],
  providers: [AppService],
})
export class AppModule {}
