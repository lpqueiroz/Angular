import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class MySecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
