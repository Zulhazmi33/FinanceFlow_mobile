import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonMenu, IonContent, IonIcon, IonLabel, IonListHeader, IonItemDivider } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { home, trendingDown, trendingUp, list, logOut, exit, add } from 'ionicons/icons';
import { AuthenticationService } from 'src/app/services/ authentication.service';
addIcons({ home, trendingDown, trendingUp, list, logOut, exit });

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [IonItemDivider, IonListHeader, IonLabel, IonIcon, IonContent, IonMenu, IonItem, IonList],
})
export class SidebarComponent  implements OnInit {
  
  selectedPath = '';
  user:any = null;

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) {
    this.router.events.subscribe(() => {
      this.selectedPath = this.router.url.replace('/', '');
    });
  }

  async ngOnInit() {
    this.user = await this.auth.getCurrentUser();
  }

  async goToPage(page: string) {
    this.selectedPath = page;
    await this.router.navigate(['/' + page]);
    const menu = document.querySelector('ion-menu');
    if (menu) {
      (menu as HTMLIonMenuElement).close();
    }
  }

  async logout() {
    await this.auth.logout();
    this.goToPage('login');
  }

}
