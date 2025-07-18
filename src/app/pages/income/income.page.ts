import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { TransactionComponent } from 'src/app/components/transaction/transaction.component';
import { Transaction } from 'src/app/interface/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
  standalone: true,
  imports: [IonContent, FormsModule, HeaderComponent, TransactionComponent]
})
export class IncomePage implements OnInit {

  constructor(
    private trans: TransactionService
  ) { }
  
  ngOnInit() {
    console.log('income');
  }
}
