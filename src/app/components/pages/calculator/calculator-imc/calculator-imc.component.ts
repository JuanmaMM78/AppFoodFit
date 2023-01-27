import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator-imc',
  templateUrl: './calculator-imc.component.html',
  styleUrls: ['./calculator-imc.component.scss'],
})
export class CalculatorIMCComponent implements OnInit {
  formModel: FormGroup;

  weight: number = 0;
  heightCM: number = 0;
  result: number = 0;

  constructor() {
    this.formModel = new FormGroup({
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getDataForm(): void {
    this.weight = this.formModel.value.weight;

    this.heightCM = this.formModel.value.height / 100;

    this.result = this.weight / Math.pow(this.heightCM, 2);

    this.result = parseFloat(this.result.toFixed(1));

    this.formModel.reset();
  }
}
