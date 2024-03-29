import { Component } from '@angular/core';

@Component({
  selector: 'app-person-registration',
  templateUrl: './person-registration.component.html',
  styleUrls: ['./person-registration.component.scss']
})
export class PersonRegistrationComponent {
  name = '';
  address = ''
  number = 0; 
  complement = '';
  neighborhood = ''
  cep = '';
  cidade = '';
  state: any;

  states: any[] = []

  constructor() {
    this.states = [
      {label: 'Acre', value: 1},
      {label: 'Alagoas', value: 2},
      {label: 'Amapá', value: 3},
      {label: 'Amazonas', value: 4},
      {label: 'Bahia', value: 5},
      {label: 'Ceará', value: 6},
      {label: 'Distrito Federal', value: 7},
      {label: 'Espírito Santo', value: 8},
      {label: 'Goiás', value: 9},
      {label: 'Maranhão', value: 10},
      {label: 'Mato Grosso', value: 11},
      {label: 'Mato Grosso do Sul', value: 12},
      {label: 'Minas Gerais', value: 13},
      {label: 'Pará', value: 14},
      {label: 'Paraíba', value: 15},
      {label: 'Paraná', value: 16},
      {label: 'Pernambuco', value: 17},
      {label: 'Piauí', value: 18},
      {label: 'Rio de Janeiro', value:19},
      {label: 'Rio Grande do Norte', value: 20},
      {label: 'Rio Grande do Sul', value: 21},
      {label: 'Rondônia', value: 22},
      {label: 'Roraima', value: 23},
      {label: 'Santa Catarina', value: 24},
      {label: 'São Paulo', value: 25},
      {label: 'Sergipe', value: 26},
      {label: 'Tocantins', value: 27},
    ]
  }

}
