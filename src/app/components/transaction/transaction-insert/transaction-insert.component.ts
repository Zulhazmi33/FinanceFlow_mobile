import { Component, OnInit } from '@angular/core';
import { ModalController, IonButtons, IonTitle, IonToolbar, IonIcon, IonButton, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-transaction-insert',
  templateUrl: './transaction-insert.component.html',
  styleUrls: ['./transaction-insert.component.scss'],
  standalone: true,
  imports: [IonHeader, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, ]
})
export class TransactionInsertComponent  implements OnInit {

  constructor(
    private mcl: ModalController
  ) { }

  ngOnInit() {}
  
  dismiss() {
    this.mcl.dismiss();
  }
}