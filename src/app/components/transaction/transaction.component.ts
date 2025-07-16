import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonContent } from "@ionic/angular/standalone";
import { Transaction } from "src/app/interface/transaction"

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonFabButton, IonFab, IonLabel, IonItem, IonList, CommonModule]
})
export class TransactionComponent  implements OnInit {
  @Input() items: Transaction[] = [];

  constructor() { }

  ngOnInit() {
  }

}
