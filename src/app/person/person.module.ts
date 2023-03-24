import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonRegistrationComponent } from './person-registration/person-registration.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { PersonTableComponent } from './person-table/person-table.component';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    PersonRegistrationComponent,
    PersonSearchComponent,
    PersonTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    DropdownModule,
    ButtonModule,
    InputMaskModule,
    TableModule,
    TooltipModule,

    SharedModule,

    FontAwesomeModule
  ],
  exports: [
    PersonRegistrationComponent,
    PersonSearchComponent
  ]
})
export class PersonModule { }
