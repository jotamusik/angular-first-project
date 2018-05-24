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
      { label: 'Login', routerLink: '/' },
      { label: 'Crear Usuarios', routerLink: '/user/create' },
      { label: 'Listar Usuarios', routerLink: '/user/show' },
      { label: 'Modificar Usuarios', routerLink: '/user/modify' },
      { label: 'Eliminar Usuarios', routerLink: '/user/delete' }
    ];
  }
}
