import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-search',
  templateUrl: './launch-search.component.html',
  styleUrls: ['./launch-search.component.scss']
})
export class LaunchSearchComponent implements OnInit {
  title = 'algamoney-ui';

  first = 0
  
  formattedCols: any[] = [];
  
  launches = [
    {  tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
    dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
    dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/07/2017',
    dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: '05/06/2017',
    dataPagamento: '30/05/2017', valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: '18/08/2017',
    dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '10/07/2017',
    dataPagamento: '09/07/2017', valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '13/07/2017',
    dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];
  
  rows = this.launches.length
  
  ngOnInit(): void {
    this.formattedCols = [
      {field: 'pessoa', header: 'Pessoa'},
      {field: 'descricao', header: 'Descrição'},
      {field: 'dataVencimento', header: 'Data de Vencimento'},
      {field: 'dataPagamento', header: 'Data de Pagamento'},
      {field: 'valor', header: 'Valor'},
 //     {field: 'tipo', header: 'Tipo'}
    ];
  }
  
  
}
