import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFab, IonIcon, IonFabButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { CategoryInsertComponent } from './category-insert/category-insert.component';
import { ModalController } from '@ionic/angular/standalone'

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonIcon, IonFab, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class CategoryPage implements OnInit {

  items = [
    { id: '1', date: '2025-07-15', amount: 3000, reason: 'Monthly Salary', category: 'Income' },
    { id: '2', date: '2025-07-14', amount: 150, reason: 'Grocery Shopping', category: 'Food' },
    { id: '3', date: '2025-07-13', amount: 60, reason: 'Electricity Bill', category: 'Utilities' },
    { id: '4', date: '2025-07-12', amount: 800, reason: 'Freelance Payment', category: 'Income' },
    { id: '5', date: '2025-07-11', amount: 45, reason: 'Internet Subscription', category: 'Utilities' },
    { id: '6', date: '2025-07-10', amount: 100, reason: 'Dinner at Restaurant', category: 'Food' },
    { id: '7', date: '2025-07-09', amount: 200, reason: 'Clothing Purchase', category: 'Shopping' },
    { id: '8', date: '2025-07-08', amount: 350, reason: 'Sold Old Furniture', category: 'Income' },
    { id: '9', date: '2025-07-07', amount: 50, reason: 'Public Transport', category: 'Transport' },
    { id: '10', date: '2025-07-06', amount: 90, reason: 'Movie Night', category: 'Entertainment' }
  ];
  constructor(
    private mcl: ModalController
  ) { }

  ngOnInit() {
  }

  async addCategory() {
    const modal = await this.mcl.create({
    component: CategoryInsertComponent,
        componentProps: {
            title: 'New Asset Request',
        },
        // cssClass: 'custom-height-modal'
    });
    await modal.present();
  }  
}
