import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent {

  @Input()
  formattedCols: {field: string, header: string}[] = []

  @Input()
  persons: any[] = []

  first = 0;

  rows = 0;
  
  ngOnInit(): void {
    this.formattedCols = [
      {field: 'nome', header: 'Nome'},
      {field: 'cidade', header: 'Cidade'},
      {field: 'estado', header: 'Estado'},
      {field: 'ativo', header: 'Status'},
    ];
    
    this.rows = this.persons.length
  }


}
