import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  mensagens: string[] = []

  logar(mensagem: string) {
    console.log(`O nome ${mensagem} foi adicionado.`)
    this.mensagens.push(mensagem)
  }

  logarTudo() {
    console.log(this.mensagens)
  }

}
