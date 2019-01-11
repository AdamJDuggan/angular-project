import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      //need to validate this way with reactive forms
      'userData' : new FormGroup({
        // nested form
        'username' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
      }),
      
      'gender' : new FormControl('Male')
    });
  }

  onReactiveSubmit(){ 
    console.log(this.signupForm);
  }

}
