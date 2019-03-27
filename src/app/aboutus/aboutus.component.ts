import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  title="Foodz-In"

  queries= [
    {value: 'q0', viewValue: 'I need help with my online order.'},
    {value: 'q1', viewValue: 'I have a question regarding table bookings.'},
    {value: 'q2', viewValue: 'The website/app are not working the way they should.'}
  ];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
  constructor() { }

  ngOnInit() {
  }
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
