import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonCardSubtitle } from '@ionic/angular/standalone';
import { AuthenticationService } from 'src/app/services/ authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonImg, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, IonContent, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.googleLoginPopup();
  }

}
