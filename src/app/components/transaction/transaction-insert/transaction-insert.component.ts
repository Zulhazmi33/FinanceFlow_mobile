import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonButtons, IonTitle, IonToolbar, IonIcon, IonButton, IonHeader, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonCardContent, IonSelectOption } from '@ionic/angular/standalone';
import { IonSelect } from "@ionic/angular/standalone";
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';
import { FormsModule } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-insert',
  templateUrl: './transaction-insert.component.html',
  styleUrls: ['./transaction-insert.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonInput, IonItem, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonSelect, IonSelectOption, FormsModule]
})
export class TransactionInsertComponent  implements OnInit {
  @Input() type:string = '';

  categories: Category[] = [];
  selectedAmount:any;
  selectedCategory:string = 'Need';
  selectedReason:string = 'Need';

  constructor(
    private mcl: ModalController,
    private cat: CategoryService,
    private trans: TransactionService
  ) { }

  ngOnInit() {
  this.READ_category();
}
  
  dismiss() {
    this.mcl.dismiss();
  }

  CREATE_transaction() {
    const transactionObj = {
      id: '',
      userID: localStorage.getItem('userID') ?? '',
      date: new Date(),
      amount: this.selectedAmount ?? 0,
      reason: this.selectedReason,
      category: this.selectedCategory,
    }
    try {
        this.trans.CREATE_transaction(transactionObj, this.type);

    } catch(error) {
      console.error('Fail to CREATE ',this.type);
    } finally {
      this.dismiss();
    }
  }

  READ_category() {
    this.cat.READ_category_reason(this.selectedCategory).subscribe ({
      next:(data) => {
        this.categories = data;
        this.selectedReason = this.categories[0].reason;
      }
    })
  }
}