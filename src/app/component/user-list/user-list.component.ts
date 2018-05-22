import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  waiting = true;
  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (users) => {
      this.users = users;
      this.waiting = false;
    });
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

}
