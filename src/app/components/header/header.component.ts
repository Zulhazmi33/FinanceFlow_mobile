import { Component, Input, OnInit } from '@angular/core';
import { IonToolbar, IonTitle, IonHeader, IonButtons, IonMenuButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButtons, IonToolbar, IonHeader, IonTitle, IonMenuButton],
})
export class HeaderComponent  implements OnInit {
  @Input() page_name : string= 'FinanceFlow';

  constructor() { }

  ngOnInit() {}

}
