import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-launch-table',
  templateUrl: './launch-table.component.html',
  styleUrls: ['./launch-table.component.scss']
})
export class LaunchTableComponent {

  @Input()
  formattedCols: {field: string, header: string}[] = []

  @Input()
  launches: any[] = []

  first = 0;

  rows = 0;

  ngOnInit(): void {
    this.formattedCols = [
      {field: 'pessoa', header: 'Pessoa'},
      {field: 'descricao', header: 'Descrição'},
      {field: 'dataVencimento', header: 'Data de Vencimento'},
      {field: 'dataPagamento', header: 'Data de Pagamento'},
      {field: 'valor', header: 'Valor'},
      //     {field: 'tipo', header: 'Tipo'}
    ];
    
    this.rows = this.launches.length
  }
}
