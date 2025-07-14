import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonTitle, IonHeader, IonIcon, IonButton, IonButtons, IonMenu, IonContent, IonMenuButton, IonMenuToggle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonContent, IonButtons, IonButton, IonIcon, IonToolbar, IonHeader, IonTitle, IonMenu, IonMenuButton, IonMenuToggle],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
