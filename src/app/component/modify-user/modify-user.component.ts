
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { SelectItem } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css'],
  providers: [
    MessageService
  ]
})
export class ModifyUserComponent implements OnInit {

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

  modifyUser() {
    this.userService.modifyUser(this.user).subscribe(( user ) => {
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
      summary: 'User modified',
      detail: 'User modified successfully'
    });
  }
  showError() {
    this.clearMsgs();
    this.msgs.push({
      severity: 'error',
      summary: 'Error on modifying user',
      detail: 'There was an error modifying the user, try it again later'
    });
  }

  clearMsgs() {
    this.msgs = [];
  }

}
