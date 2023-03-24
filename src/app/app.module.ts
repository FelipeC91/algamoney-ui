import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrashCan, faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { CoreModule } from './core/core.module'
import { LaunchModule } from './launch/launch.module';
import { PersonModule } from './person/person.module';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CoreModule,
    LaunchModule,
    PersonModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(faPencil, faTrashCan, faBars, faPlus);
  }
 }
