import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  msgs: Message[] = [];
  selectedUsers: User[];
  users: User[];
  waiting = true;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedUsers = [];
    this.getUsers();

  }

  getUsers() {
    this.userService.getUsers().subscribe( (users) => {
      this.users = users;
      this.waiting = false;
    });
  }

  deleteUser() {

    this.waiting = true;
    this.userService.deleteUser(this.selectedUsers).subscribe( (response) => {
      if ( response.statusCode === 200 ) {
        this.showSuccess();
      }
      else {
        this.showError();
      }
    });
    this.router.navigate(['/user/show']);
  }

  checkAddressField () {
    let empty = true;
    for (const user of this.users) {
      if ( user.address ) {
        empty = false;
      }
    }
    return empty;
  }

  showSuccess() {
    this.clearMsgs();
    this.msgs.push({
      severity: 'success',
      summary: 'Users deleted',
      detail: 'Users deleted successfully'
    });
  }
  showError() {
    this.clearMsgs();
    this.msgs.push({
      severity: 'error',
      summary: 'Error on deleting users',
      detail: 'There was an error deleting the users, try it again later'
    });
  }

  clearMsgs() {
    this.msgs = [];
  }

}
