import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
//es como nuestro codigo raiz; que contiene controladores, servicios, provdiers, etc
//CADA modulo contiene una parte de mi app
@Module({
  imports: [TasksModule,MongooseModule.forRoot('ongodb://localhost/nestjsFirst')],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
