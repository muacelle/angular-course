import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  nome = 'Marcelle'
  dataNascimento = '1995-09-20'

  mostrarDataNascimento() {
    alert(`A data de nascimento é: ${this.dataNascimento}`)
  }
}
