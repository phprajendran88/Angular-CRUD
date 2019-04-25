import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { from } from 'rxjs';
import { User } from '../user.model';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  users : User[];

  constructor(private formBuilder: FormBuilder,private router: Router,private userservice:UserService) { }

  ngOnInit() {


    this.editForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]]
     // password: ['', [Validators.required, Validators.minLength(6)]]
  });

  let userId = localStorage.getItem("EditId");

  if(!userId){
    alert('Invalid Action');
    this.router.navigate(['list-user']);
    return;
  }

  let v = this.userservice.getUserById(+userId)
//  console.log(v);
  this.editForm.setValue(v);
  }
  
// convenience getter for easy access to form fields
get f() { return this.editForm.controls; }

onSubmitE(){

  this.userservice.updateUser(this.editForm.value);
  this.router.navigate(["list-user"]);

}

}


