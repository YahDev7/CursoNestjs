import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    tasks:Task[] =[
       {
        id:1,
        title:"string",
        descripcion:"string",
        done:true
       },
       {
        id:2,
        title:"string",  
        descripcion:"string",
        done:true
       },
       {
        id:3,
        title:"string",
        descripcion:"string",
        done:true
       }
       
    ];

    getTasks(){
        return this.tasks
    }
    getTask(id:number){
        return this.tasks.find((task)=>task.id=id);
    }



}
