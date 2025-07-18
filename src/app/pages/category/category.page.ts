import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFab, IonIcon, IonFabButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { CategoryInsertComponent } from './category-insert/category-insert.component';
import { ModalController } from '@ionic/angular/standalone'
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonIcon, IonFab, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, FormsModule, HeaderComponent]
})
export class CategoryPage implements OnInit {
  
  categoryTypes = ['Need', 'Want', 'Saving'];
  categories: Category[] = [];

  constructor(
    private mcl: ModalController,
    private cat: CategoryService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.READ_category();
  }
  
  async READ_category() {
    this.cat.READ_category().subscribe({
      next: (data) => {
        this.categories = data;
        console.log('category = ',this.categories);
      }
    });
  }

  async addCategory() {
    const modal = await this.mcl.create({
    component: CategoryInsertComponent,
        componentProps: {
            title: 'New Asset Request',
        },
    });
    await modal.present();
  }  
}
