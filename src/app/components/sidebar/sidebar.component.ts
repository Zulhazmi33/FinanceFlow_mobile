import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenu } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [IonMenu, IonToolbar, IonHeader, IonContent, IonItem, IonList, IonTitle],
})
export class SidebarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
