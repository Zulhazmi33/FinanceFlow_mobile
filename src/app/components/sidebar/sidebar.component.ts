import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenu } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [IonMenu, IonToolbar, IonHeader, IonContent, IonItem, IonList, IonTitle],
})
export class SidebarComponent  implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {}

  async goToPage(page: string) {
    await this.route.navigate(['/' + page]);
    const menu = document.querySelector('ion-menu');
    if (menu) {
      (menu as HTMLIonMenuElement).close();
    }
  }
}
