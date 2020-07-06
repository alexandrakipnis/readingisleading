import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-mb',
  templateUrl: './about-mb.component.html',
  styleUrls: ['./about-mb.component.css']
})


export class AboutMbComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
