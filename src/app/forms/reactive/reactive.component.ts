import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'q';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Birdie', 'Abigail', 'Menant'];



  constructor() { } 

  ngOnInit() {

    this.signupForm = new FormGroup({
      //need to validate this way with reactive forms
      'userData' : new FormGroup({
        // nested form
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      
      'gender' : new FormControl('Male'),
      'hobbies' : new FormArray([])
    });
    // type of observable 
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value);
    // );
    // this one will say if invalid 
    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value);
    );

    //id use patch value to update part of the form
    this.signupForm.setValue({
      'userData': {
        'username': 'Adam',
        'email': 'adam@adam.com'
      },
      'gender' : 'Male',
      'hobbies': []
    })
  }

  onReactiveSubmit(){ 
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobbie(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl);
  }


  forbiddenNames(control: FormControl): {[s:string]: boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden' : true}
    }
    return null;  
  }



  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}


