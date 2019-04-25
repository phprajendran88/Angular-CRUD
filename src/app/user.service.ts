
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {


fakeUsers:User[] = [
{"id":1 , firstName:'raj', lastName:'kumar', email:'kumar@gmail.com'},
{"id":2 , firstName:'raj2', lastName:'kumar2', email:'kumar@gmail.com'},
{"id":3 , firstName:'raj3', lastName:'kumar3', email:'kumar@gmail.com'},
{"id":4 , firstName:'raj4', lastName:'kumar4', email:'kumar@gmail.com'}
];

  constructor(private http:HttpClient) { }
  
getUsers(){
  
  return of(this.fakeUsers);
}
createUsers(user:User){

  return of(this.fakeUsers.push(user));

}
getUserById(userId:number){

  var obj = this.fakeUsers.filter(o => o.id === userId)[0];
  //console.log(obj)
  return obj;
}
updateUser(user:User){
//let updateItem  = this.fakeUsers.find(this.findIndexToUpdate(user.id),user.id);
//let index = this.fakeUsers.indexOf(updateItem);
//this.fakeUsers[index] =user;

//console.log(user)


var id = user.id

var index = this.fakeUsers.findIndex(item => item.id === id)

// Replace the item by index.
this.fakeUsers.splice(index, 1, user)

// To check.
console.log('f');
console.log(this.fakeUsers) // 'jane' is now 'janie'.

}
deleteUser(i){

  
var id = i


// Another method to search for the index.
var index = this.fakeUsers.map(function(el) {
  return el.id
}).indexOf(id)

// Delete  the item by index.
this.fakeUsers.splice(index, 1)

}
}
