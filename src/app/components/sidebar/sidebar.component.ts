import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonMenu, IonContent, IonIcon, IonLabel, IonListHeader } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { home, trendingDown, trendingUp } from 'ionicons/icons';
addIcons({ home, trendingDown, trendingUp });

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonLabel, IonIcon, IonContent, IonMenu, IonItem, IonList],
})
export class SidebarComponent  implements OnInit {
  
  ngOnInit() {}
  selectedPath = '';

  constructor(private router: Router) {
    console.log('path = ',this.selectedPath)
    this.router.events.subscribe(() => {
      this.selectedPath = this.router.url.replace('/', '');
    });
  }

  async goToPage(page: string) {
    this.selectedPath = page;
    await this.router.navigate(['/' + page]);
    const menu = document.querySelector('ion-menu');
    if (menu) {
      (menu as HTMLIonMenuElement).close();
    }
  }
}
