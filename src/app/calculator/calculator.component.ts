import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result = '';
  userInput: string;
  private register: number[] = [];

  constructor() { }

  private static add(a, b) {
    return a + b;
  }
  private static subtract(a, b) {
    return a - b;
  }

  ngOnInit() {
  }

  plusClicked() {
    this.calculateResult(CalculatorComponent.add);
  }

  minusClicked() {
    this.calculateResult(CalculatorComponent.subtract);
  }

  clear() {
    this.userInput = '';
    this.result = '';
    this.register = [];
  }

  private calculateResult(action) {
    const inputValue = Number(this.userInput);

    this.result += this.userInput;

    if (this.register.length === 0) {
      this.register.push(inputValue);
    } else {
      const newResult = action(this.register.pop(), inputValue);
      this.result = '' + newResult;
      this.register.push(newResult);
    }

    this.userInput = '';
  }

}
