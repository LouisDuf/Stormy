import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ajout',
  templateUrl: './card-ajout.component.html',
  styleUrls: ['./card-ajout.component.scss'],
})
export class CardAjoutComponent implements OnInit {
  taskName
  taskDate
  taskHourStart
  taskHourEnd
  taskLocate

  taskObject
  constructor(private modal: ModalController) {}

  ngOnInit() {}

  async dismis(){
    await this.modal.dismiss(this.taskObject)
  }

  AddTask(){
    this.taskObject = ({taskName:this.taskName,
      taskDate:this.taskDate,
      taskHourStart:this.taskHourStart,
      taskHourEnd:this.taskHourEnd,
      taskLocate:this.taskLocate})
  }

}
