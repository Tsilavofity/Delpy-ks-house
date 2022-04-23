import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {


  contactForm! : FormGroup; 
  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }
 
  get lastname() {
    return this.contactForm.get('lastname');
  }
 
  get email() {
    return this.contactForm.get('email');
  }
 
 
  onSubmit() {
    console.log(this.contactForm.value);
  }

}
