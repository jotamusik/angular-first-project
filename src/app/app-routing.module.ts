import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';
import { ModifyUserComponent } from './component/modify-user/modify-user.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'user/show', component: UserListComponent },
  { path: 'user/create', component: CreateUserComponent },
  { path: 'user/delete', component: DeleteUserComponent },
  { path: 'user/modify', component: ModifyUserComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
