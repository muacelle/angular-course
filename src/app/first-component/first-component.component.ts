import { Component } from "@angular/core";

@Component({
  selector: 'app-first-component',
  template: '<h2>{{content}}</h2>',
  styles: ['h2 {color: gray}']
})
export class FirstComponentComponent {
  content = 'This is the first component.'
}
