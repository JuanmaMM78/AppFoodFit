import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator-kcal',
  templateUrl: './calculator-kcal.component.html',
  styleUrls: ['./calculator-kcal.component.scss'],
})
export class CalculatorKcalComponent implements OnInit {
  formModel: FormGroup;

  genre: string = '';
  age: number = 0;
  height: number = 0;
  weight: number = 0;
  kal: number = 0;
  activity: string = '';

  basal: number = 0;
  lossFat: number = 0;
  fatGain: number = 0;

  constructor() {
    this.formModel = new FormGroup({
      genre: new FormControl('', [Validators.required]),
      activity: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getDataForm(): void {
    console.log(this.formModel.value);

    this.genre = this.formModel.value.genre;
    this.age = this.formModel.value.age;
    this.height = this.formModel.value.height;
    this.weight = this.formModel.value.weight;

    this.activity = this.formModel.value.activity;

    if (this.genre === 'm') {
      this.kal = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.kal = parseInt(this.kal.toFixed());
    } else {
      this.kal = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.kal = parseInt(this.kal.toFixed());
    }

    if (this.activity === 'sedentario') {
      this.basal = this.kal * 1.2;
      this.basal = parseInt(this.basal.toFixed());

      this.lossFat = this.basal - 400;
      this.lossFat = parseInt(this.lossFat.toFixed());

      this.fatGain = this.basal + 300;
      this.fatGain = parseInt(this.fatGain.toFixed());
    }

    if (this.activity === 'poco') {
      this.basal = this.kal * 1.375;
      this.basal = parseInt(this.basal.toFixed());

      this.lossFat = this.basal - 400;
      this.lossFat = parseInt(this.lossFat.toFixed());

      this.fatGain = this.basal + 300;
      this.fatGain = parseInt(this.fatGain.toFixed());
    }
    if (this.activity === 'activo') {
      this.basal = this.kal * 1.55;
      this.basal = parseInt(this.basal.toFixed());

      this.lossFat = this.basal - 400;
      this.lossFat = parseInt(this.lossFat.toFixed());

      this.fatGain = this.basal + 300;
      this.fatGain = parseInt(this.fatGain.toFixed());
    }
    if (this.activity === 'muy') {
      this.basal = this.kal * 1.9;
      this.basal = parseInt(this.basal.toFixed());

      this.lossFat = this.basal - 400;
      this.lossFat = parseInt(this.lossFat.toFixed());

      this.fatGain = this.basal + 300;
      this.fatGain = parseInt(this.fatGain.toFixed());
    }
  }
}
