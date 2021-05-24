import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.builder.group({
    email: ['',[ Validators.required, Validators.email]],
    password:['', Validators.required],
    terms: [false, Validators.requiredTrue]
  });


  get emailValid() {
    if (!this.signupForm.get('email')!.touched || !this.signupForm.get('email')!.errors){
      return "";
    } else if (this.signupForm.get('email')!.errors!.required) {
      return "Email cannot be empty";
    } else {
      return "This doesn't look like an email, please try again."
    }
  
  }
  get passwordValid(): string {
    let m: string;
    if (!this.signupForm.get('password')!.touched || !this.signupForm.get('password')!.errors ){
      return "";
    } else if (this.signupForm.get('password')!.errors!.required) {

      return "Password cannot be empty";
    } else {
      return "";
    }
  }

  get checkValid(){
    if (!this.signupForm.get('terms')!.touched || !this.signupForm.get('terms')!.errors ){
      return "";
    } else if (this.signupForm.get('terms')!.errors!.required) {

      return "Terms and Conditions required"
    } else {
      return "";
    }

  }

  
  constructor( private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  checkFields(){
    if (this.signupForm.invalid) {
      this.signupForm.get('email')!.markAsTouched();
      this.signupForm.get('password')!.markAsTouched();
      this.signupForm.get('terms')!.markAsTouched();
    } 
    return;
  }


}
