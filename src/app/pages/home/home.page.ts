import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { AuthenticationService } from 'src/app/services/ authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, HeaderComponent],
})
export class HomePage implements OnInit{
  
  constructor(
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    console.log('home');
  }

  async here() {
    let data = await this.auth.getCurrentUser();
    const token = localStorage.getItem('auth_token');
    console.log('data = ',data)
    console.log('token = ',token)
  }
}
