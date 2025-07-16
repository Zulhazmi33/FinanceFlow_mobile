import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput, IonSelectOption, IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular/standalone';
import { IonSelect } from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonLabel, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonIcon, IonButton, IonToolbar, IonTitle, IonButtons, IonHeader, IonSelect, IonSelectOption, FormsModule]
})
export class CategoryInsertComponent  implements OnInit {

  selectedCategory: 'Need'|'Want'|'Saving' = 'Need';

  constructor(
    private mcl: ModalController
  ) { }

  ngOnInit() {}
  
  dismiss() {
    this.mcl.dismiss();
  }
}
