import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  answer = '';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  defaultSecretAnswer = 'pet';


  onSubmit(){
    console.log(this.signupForm);
    //MEAN STACK TO GO IN HERE 
    this.signupForm.reset();
  }
 

  constructor() { }

  ngOnInit() {
  }

}
