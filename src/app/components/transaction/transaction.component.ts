import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonContent } from "@ionic/angular/standalone";
import { Transaction } from "src/app/interface/transaction";
import { ModalController } from '@ionic/angular/standalone'
import { TransactionInsertComponent } from './transaction-insert/transaction-insert.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonFabButton, IonFab, IonLabel, IonItem, IonList, CommonModule]
})
export class TransactionComponent  implements OnInit {
  @Input() items: Transaction[] = [];

  constructor(
    private mcl: ModalController
  ) { }

  ngOnInit() {
  }

  async addTransaction() {
    const modal = await this.mcl.create({
    component: TransactionInsertComponent,
        componentProps: {
            title: 'New Asset Request',
        },
        // cssClass: 'custom-height-modal'
    });
    await modal.present();
  }  
}
