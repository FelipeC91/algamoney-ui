import { Component } from '@angular/core';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.scss']
})
export class PersonSearchComponent {
  first = 0
  
  formattedCols: any[] = [];
  
  persons = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', ativo: true }
  ];
  
  rows = this.persons.length

  ngOnInit(): void {
    this.formattedCols = [
      {field: 'nome', header: 'Nome'},
      {field: 'cidade', header: 'Cidade'},
      {field: 'estado', header: 'Estado'},
      {field: 'ativo', header: 'Status'},
    ];
  }
}
