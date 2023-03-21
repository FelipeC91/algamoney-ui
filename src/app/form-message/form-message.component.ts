import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent {
  @Input()
  error: string = '';;
  
  @Input()
  field: any = new FormControl();
  
  @Input()
  message: string = '';


  hasError(): boolean {
    return this.field.hasError(this.error) && this.field.dirty;
  }

}
