import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.scss'],
})
export class ContentHomeComponent implements OnInit {
  
  nomTache: string = "RDV sorcière";

  
  constructor(public afDB: AngularFireDatabase) { }

  ngOnInit() {}

  add() {
    this.afDB.list('Event').push(this.nomTache)
  }

}
