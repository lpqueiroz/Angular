import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isChild: boolean = false;

  testName = "";

  constructor() {
    console.log("Constructor parent foi chamado!");
  }

  ngOnInit(): void {
    console.log("OnInit parent foi chamado!");
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}
