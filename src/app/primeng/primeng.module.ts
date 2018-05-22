
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    TableModule,
    ProgressSpinnerModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    SelectButtonModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    MenubarModule,
    TableModule,
    ProgressSpinnerModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    SelectButtonModule,
    MessagesModule,
    MessageModule
  ],
  declarations: []
})
export class PrimengModule { }
