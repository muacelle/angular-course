import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  celulares: Celular[] = [
    { id: 1, name: 'XL Pro', descricao: 'Um celular Premium', esgotado: false},
    { id: 2, name: 'XL Max', esgotado: false},
    { id: 3, name: 'XS Pro ', descricao: 'Um celular Premium e pequeno', esgotado: true}
  ]
}
