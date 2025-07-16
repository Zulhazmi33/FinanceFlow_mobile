import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { TransactionComponent } from 'src/app/components/transaction/transaction.component';
import { Transaction } from 'src/app/interface/transaction';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, TransactionComponent]
})
export class IncomePage implements OnInit {

  constructor() { }

  items: Transaction[] = [
      { id: '11', date: '2025-07-05', amount: 1200, reason: 'Bonus Payment', category: 'Income' },
      { id: '12', date: '2025-07-04', amount: 75, reason: 'Book Purchase', category: 'Education' },
      { id: '13', date: '2025-07-03', amount: 300, reason: 'Gym Membership', category: 'Health' },
      { id: '14', date: '2025-07-02', amount: 500, reason: 'Car Repair', category: 'Transport' },
      { id: '15', date: '2025-07-01', amount: 250, reason: 'Concert Tickets', category: 'Entertainment' },
      { id: '16', date: '2025-06-30', amount: 400, reason: 'Vacation Savings', category: 'Savings' },
      { id: '17', date: '2025-06-29', amount: 60, reason: 'Coffee Shop', category: 'Food' },
      { id: '18', date: '2025-06-28', amount: 90, reason: 'New Shoes', category: 'Shopping' },
      { id: '19', date: '2025-06-27', amount: 150, reason: 'Movie Subscription', category: 'Entertainment' },
      { id: '20', date: '2025-06-26', amount: 80, reason: 'Pet Supplies', category: 'Pets' }
  ];
  
  ngOnInit() {
    console.log('income');
  }

}
