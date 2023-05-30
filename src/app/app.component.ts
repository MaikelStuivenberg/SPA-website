import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentBackgroundIndex: number = 0;
  currentBackgroundImage: string = '../assets/52265521830_09098d5329_o.jpg';
}
