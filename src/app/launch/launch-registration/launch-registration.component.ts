import { Component } from '@angular/core';

@Component({
  selector: 'app-launch-registration',
  templateUrl: './launch-registration.component.html',
  styleUrls: ['./launch-registration.component.scss']
})
export class LaunchRegistrationComponent {
  stateOptions: any[] = [];
  typeValue: 'RECEITA' | 'DESPESA' = 'RECEITA';
  dueDate = new Date();
  paymentDate = new Date();
  category = 0;
  person = '';
  description = '';
  
  categories: any[] = [];
  persons: any[] = [];

  
  constructor() {
    this.stateOptions = [{label: 'Receita', value: 'RECEITA'}, {label: 'Despesa', value: 'DESPESA'}];

    this.categories = [
      {label: 'Alimentação', value: 1},
      {label: 'Transporte', value: 2}
  
    ]

    this.persons = [
      { label: 'João da Silva', value: 4 },
      { label: 'Sebastião Souza', value: 9 },
      { label: 'Maria Abadia', value: 3 },
  ]
  }
}
