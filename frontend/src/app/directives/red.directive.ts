import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { /* criando um directive atraves do elemento raiz */
    el.nativeElement.style.color = "#ff7482"
  }

}
