import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { SelectItem } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [
    MessageService
  ]
})
export class CreateUserComponent implements OnInit {

  genders: SelectItem[];
  msgs: Message[] = [];
  user: User;

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = new User;
    this.genders = [
      { label: 'Masculino', value: 'Masculino' },
      { label: 'Femenino', value: 'Femenino' },
      { label: 'No especificado', value: '' }
    ];
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(( user ) => {
      if ( this.user.equals(user) ) {
        this.showSuccess();
      }
      else {
        this.showError();
      }

      console.log("Nombre: " + this.user.name);

    });
  }

  showSuccess() {
    this.clearMsgs();
    this.msgs.push({
      severity: 'success',
      summary: 'User created',
      detail: 'User created successfully'
    });
  }
  showError() {
    this.clearMsgs();
    this.msgs.push({
      severity: 'error',
      summary: 'Error on creating user',
      detail: 'There was an error creating the user, try it again later'
    });
  }

  clearMsgs() {
    this.msgs = [];
  }

}
