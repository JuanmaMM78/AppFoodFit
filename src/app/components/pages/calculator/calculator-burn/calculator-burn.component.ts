import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator-burn',
  templateUrl: './calculator-burn.component.html',
  styleUrls: ['./calculator-burn.component.scss'],
})
export class CalculatorBurnComponent implements OnInit {
  formModel: FormGroup;

  steps: number = 0;
  weight: number = 0;

  prueba: number = 0;

  kal: number = 0;

  constructor() {
    this.formModel = new FormGroup({
      steps: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getDataForm(): void {
    this.steps = this.formModel.value.steps;

    this.weight = this.formModel.value.weight;

    this.prueba = this.steps * this.weight;

    this.kal = (this.prueba * 3) / 7000;

    this.kal = parseFloat(this.kal.toFixed(0));

    this.formModel.reset();
  }
}
