import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TestcardModule { 
  categorie: string;
  salle: string;
  nom: string;

}

export class TestJourModule { 
  jour: TestcardModule;
}
 