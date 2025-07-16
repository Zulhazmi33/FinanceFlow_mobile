import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class ExpensePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('expense');
  }

}
