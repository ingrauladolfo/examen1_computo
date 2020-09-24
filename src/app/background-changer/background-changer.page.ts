import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-changer',
  templateUrl: './background-changer.page.html',
  styleUrls: ['./background-changer.page.scss'],
})
export class BackgroundChangerPage implements OnInit {
  storedTheme: string = localStorage.getItem('theme-color');
  constructor() { }

  ngOnInit() {
  }
  setTheme(theme){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
