import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent],
})
export class HomePage implements OnInit{
  
  constructor() {}

  ngOnInit() {
    console.log('home');
  }
}
