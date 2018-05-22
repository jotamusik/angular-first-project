import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Crear Usuarios', routerLink: '/user/create' },
      { label: 'Listar Usuarios', routerLink: '/user/show' },
      { label: 'Eliminar Usuarios', routerLink: '/user/delete' }
    ];
  }
}
