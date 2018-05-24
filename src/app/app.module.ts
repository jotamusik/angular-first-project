import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { HeaderComponent } from './component/header/header.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';
import { ModifyUserComponent } from './component/modify-user/modify-user.component';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './service/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    CreateUserComponent,
    DeleteUserComponent,
    ModifyUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
