import { Component, Input, OnInit } from '@angular/core';

import { IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonContent } from "@ionic/angular/standalone";
import { Transaction } from "src/app/interface/transaction";
import { ModalController } from '@ionic/angular/standalone'
import { TransactionInsertComponent } from './transaction-insert/transaction-insert.component';
import { TransactionService } from 'src/app/services/transaction.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonFabButton, IonFab, IonLabel, IonItem, IonList, DatePipe]
})
export class TransactionComponent  implements OnInit {
  @Input() type: string = '';
  transaction: Transaction[] = [];

  constructor(
    private mcl: ModalController,
    private trans: TransactionService
  ) { }

  ngOnInit() {
    this.READ_transaction();
  }

  ionViewWillEnter() {
  }

  async addTransaction() {
    const modal = await this.mcl.create({
    component: TransactionInsertComponent,
        componentProps: {
            type: this.type,
        },
        // cssClass: 'custom-height-modal'
    });
    await modal.present();
  }  

  async READ_transaction() {
    this.trans.READ_transaction(this.type).subscribe ({
      next: (data) => {
        this.transaction = data;
      }
    });
  }

}
