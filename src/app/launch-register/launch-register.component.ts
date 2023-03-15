import { Component } from '@angular/core';

@Component({
  selector: 'app-launch-register',
  templateUrl: './launch-register.component.html',
  styleUrls: ['./launch-register.component.scss']
})
export class LaunchRegisterComponent {
  stateOptions: any[] = [];
  typeValue: 'RECEITA' | 'DESPESA' = 'RECEITA';
  dataVencimento = new Date();
  dataPagamento = new Date();
  category = 0;
  person = '';
  
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
