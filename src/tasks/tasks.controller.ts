import { Body, Controller,Delete,Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){}
    @Get("/all") // decorador, y podemos crear nuestra ruta, en este caso seria /tasks/all
    getTasks():Task[]{
        return this.taskService.getTasks();
    }
    @Get(":id") // Parametro
    getTask(@Param('id') idTask:number){
       console.log(idTask)
        return this.taskService.getTask(idTask);
    }
    @Post() // decorador, y podemos crear nuestra ruta, en este caso seria /tasks/all
    createTask(@Body() task):string{
        console.log(task);
        return "create Tasks";
    }
    
    @Put(":id") // Parametro
    updateTask(@Param('id') idTask):string{
        console.log(idTask)
        return "update Tasks";
    }
    @Delete() // decorador, y podemos crear nuestra ruta, en este caso seria /tasks/all
    deleteTask():{err,status,statusText}{
        return {err:false,status:200,statusText:"Eliminado con exito"};
    }
    /*  deleteTask():object{
        return {err:false,status:200,statusText:"Eliminado con exito"};
    } */
}
