import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonSelectOption, IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular/standalone';
import { IonSelect } from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonLabel, IonItem, IonCardContent,  IonCardTitle, IonCardHeader, IonCard, IonIcon, IonButton, IonToolbar, IonTitle, IonButtons, IonHeader, IonSelect, IonSelectOption, FormsModule]
})
export class CategoryInsertComponent  implements OnInit {

  selectedCategory: 'Need'|'Want'|'Saving' = 'Need';
  selectedReason:string = '';

  constructor(
    private mcl: ModalController,
    private cat: CategoryService,
  ) { }

  ngOnInit() {}

  dismiss() {
    this.mcl.dismiss();
  }

  CREATE_category() {
    const categoryObj: Category = {
      id: '',
      userID: localStorage.getItem('userID') ?? '',
      category: this.selectedCategory,
      reason: this.selectedReason,
    };
    try {
      this.cat.CREATE_category(categoryObj);
    } catch (error) {
      console.error('Fail to CREATE category = ',error)
    } finally {
      this.dismiss();
    }
  }

}
