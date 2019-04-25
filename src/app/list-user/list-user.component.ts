import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
users : User[];
text = 'app';
title = 'List User';
constructor(private router:Router, private userService:UserService, private titleService: Title) { }
update(e){

 console.log(e.target.value)
 this.text = e.target.value;   
}
  ngOnInit() {
  //alert()
  this.titleService.setTitle(this.title);
  
  this.userService.getUsers()
  .subscribe( data => {
    this.users =data;
    });
  }
  
  addUser(){

//alert()
this.router.navigate(['add-user']);
}

editUser(i){

  localStorage.removeItem("EditId");
  localStorage.setItem("EditId",i);
  this.router.navigate(['edit-user']);


}

deleteUser(i){

  //localStorage.removeItem("deleteId");
  //localStorage.setItem("deleteId",i);
  this.userService.deleteUser(i)
  
  this.router.navigate(['list-user']);


}
}
