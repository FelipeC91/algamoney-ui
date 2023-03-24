import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';

import { LaunchRegistrationComponent } from './launch-registration/launch-registration.component';
import { LaunchSearchComponent } from './launch-search/launch-search.component'
import { LaunchTableComponent } from './launch-table/launch-table.component'

import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';

import { SharedModule } from '../shared/shared.module'


import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LaunchRegistrationComponent,
    LaunchSearchComponent,
    LaunchTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    SelectButtonModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    TableModule,
    ButtonModule,
    TooltipModule,

    SharedModule,
    
    FontAwesomeModule,
  ],
  exports: [
    LaunchRegistrationComponent,
    LaunchSearchComponent
  ]
})
export class LaunchModule { }
