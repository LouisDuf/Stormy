import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TestcardModule } from '../testcard/testcard.module';

@Component({
  selector: 'app-edtcard',
  templateUrl: './edtcard.component.html',
  styleUrls: ['./edtcard.component.scss'],
})
export class EDTcardComponent implements OnInit {
  @Input() public card: TestcardModule;
  result: string;

  constructor(private actionSheetCtrl: ActionSheetController) { }
  
  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    // const result = await actionSheet.onDidDismiss();
    // this.result = JSON.stringify(result, null, 2);
  }
  
}
