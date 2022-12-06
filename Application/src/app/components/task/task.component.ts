import { Observable } from 'rxjs';
import { taskModel } from './../../models/taskModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  constructor() { }

  callTaskModel: Observable<taskModel>;
  

  ngOnInit() {


  }

  
 /* onCheck(event, i){
    this.tasks[i].isChecked = event.detail.checked;
  }*/
}