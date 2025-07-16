import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonTitle, IonToolbar, IonButton, IonIcon } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonToolbar, IonTitle, IonButtons, IonHeader, ]
})
export class CategoryInsertComponent  implements OnInit {

  constructor(
    private mcl: ModalController
  ) { }

  ngOnInit() {}
  
  dismiss() {
    this.mcl.dismiss();
  }
}
