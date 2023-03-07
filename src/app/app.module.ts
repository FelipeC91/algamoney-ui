import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrashCan, faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { LaunchSearchComponent } from './launch-search/launch-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PersonSearchComponent } from './person-search/person-search.component';
@NgModule({
  declarations: [
    AppComponent,
    LaunchSearchComponent,
    NavBarComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    SidebarModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(faPencil, faTrashCan, faBars, faPlus);
  }
 }
