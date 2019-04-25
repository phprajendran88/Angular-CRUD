import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;
  title = 'Login';
  constructor(private formBuilder: FormBuilder,private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
           // password: ['', [Validators.required, Validators.minLength(6)]]
        });
       
    }
   
    // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
 
onSubmit(){

this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-');
        this.router.navigate(['list-user']);
}
}
