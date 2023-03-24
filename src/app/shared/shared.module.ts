import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MessageModule} from 'primeng/message';
import { FormMessageComponent } from './form-message/form-message.component';



@NgModule({
  declarations: [
    FormMessageComponent
  ],
  imports: [
    CommonModule,

    MessageModule
  ],
  exports: [FormMessageComponent]
})
export class SharedModule { }
