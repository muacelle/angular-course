import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico',
  templateUrl: './exemplo-servico.component.html',
  styleUrls: ['./exemplo-servico.component.css']
})
export class ExemploServicoComponent {

  nome = ''

  constructor(public logger: LoggerService) {}

  adicionarNome() {
    this.logger.logar(this.nome)
  }

  exibirTodos() {
    this.logger.logarTudo()
  }

}
