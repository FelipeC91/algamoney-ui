import { Component } from '@angular/core';

@Component({
  selector: 'app-launch-register',
  templateUrl: './launch-register.component.html',
  styleUrls: ['./launch-register.component.scss']
})
export class LaunchRegisterComponent {
  stateOptions: any[] = [];
  typeValue: 'receita' | 'despesa' = 'receita';
  dataVencimento = new Date();
  dataPagamento = new Date();
  constructor() {
    this.stateOptions = [{label: 'Receita', value: 'receita'}, {label: 'Despesa', value: 'despesa'}];
  }
}
