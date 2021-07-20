import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() testName = ""; // toda vez que isso mudar de valor, ngOnChanges será executado.

  constructor() {
    console.log("constructor child foi chamado!");
  }

  ngOnInit(): void {
    console.log("OnInit child foi chamado!");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy child é chamado!");
  }

  ngOnChanges(changes: any): void {
    console.log(changes);
    console.log("OnChanges child é chamado!");
  }

}
