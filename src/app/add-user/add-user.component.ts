import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  [x: string]: any;

  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router,private userservice:UserService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        id: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]]
       // password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
 
onSubmitR(){  
this.submitted = true;

// stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  else{

    this.userservice.createUsers(this.registerForm.value).subscribe(users => {
      //console.log(users);
      this.router.navigate(['list-user']);
  });
  };

  //alert('SUCCESS!! :-');
  //this.router.navigate(['list-user']);  
  }
}
