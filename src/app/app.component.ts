import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, SidebarComponent],
  standalone: true,
})
export class AppComponent {
  constructor() {}
}
