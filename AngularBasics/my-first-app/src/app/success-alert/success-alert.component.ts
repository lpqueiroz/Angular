import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  // successAlert = "SUCESSO!!!!!";
  canShowButton: boolean = true;
  randomText = "Larissa Queiroz";

  items = [1, 2, 3, 4, 5];

  username = '';
  canShowSuccessMessage = true;

  constructor() { }

  ngOnInit(): void {
  }

  successAlert() {
    return "SUCESSO!!!!";
  }

  onClickButton() {
    this.canShowButton = !this.canShowButton;
  }

  onEditText(event: any) {
    console.log((event.target).value);
  }

}
