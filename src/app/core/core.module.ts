import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './nav-bar/nav-bar.component'

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,

    FontAwesomeModule,
  ],

  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
