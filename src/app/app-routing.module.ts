import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }      from './login/login.component';
import { ListUserComponent }   from './list-user/list-user.component';
import { EditUserComponent }   from './edit-user/edit-user.component';
import { AddUserComponent }   from './add-user/add-user.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent , data: { title: 'My Calendar' } },
  { path: '', component: LoginComponent, data: { title: 'My Calendar' } },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
