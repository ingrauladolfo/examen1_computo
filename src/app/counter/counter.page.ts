import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit {

  constructor() { }
  count:number = 0;
  counter(){
    this.count += 1;
  }
  discounter(){
    this.count -= 1;
  }

  ngOnInit() {
  }

}
