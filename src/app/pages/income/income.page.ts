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

  // items: Transaction[] = [
  //     { id: '18', amount: 90, reason: 'New Shoes', category: 'Shopping' },
  //     { id: '19', amount: 150, reason: 'Movie Subscription', category: 'Entertainment' },
  //     { id: '20', amount: 80, reason: 'Pet Supplies', category: 'Pets' },
  //     { id: '18', amount: 90, reason: 'New Shoes', category: 'Shopping' },
  //     { id: '19', amount: 150, reason: 'Movie Subscription', category: 'Entertainment' },
  //     { id: '20', amount: 80, reason: 'Pet Supplies', category: 'Pets' },
  //     { id: '18', amount: 90, reason: 'New Shoes', category: 'Shopping' },
  //     { id: '19', amount: 150, reason: 'Movie Subscription', category: 'Entertainment' },
  //     { id: '20', amount: 80, reason: 'Pet Supplies', category: 'Pets' }
  // ];

  incomeList: any[] = [];
  // incomeList: Transaction[] = [];
  
  ngOnInit() {
    console.log('income');
    this.getIncome();
  }

  async getIncome() {

    await this.trans.READ_income().subscribe(
      (res) => {
        this.incomeList = res;
        console.log('income 1= ',this.incomeList);
      },
      (err) => {
        alert('Error while fetching expense data');
      }
    );
  }
}
