import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit { /* implementar um ciclo de vida de inicialização */
  @Input('myForEm')
  private _numbers!: number[]; /* essa sintaxe vai pegar tu que vem depois da palavra em *//* essa sintaxe vai pegar tu que vem depois da palavra em */
  public get numbers(): number[] {
    return this._numbers;
  }
  public set numbers(value: number[]) {
    this._numbers = value;
  }
  /* @Input('myForUsando') texto: string /*pode se fazer outros inputs*/

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void { 
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
      this.template, { $implicit: number }) /* passar um número $implicit para a directive */
    }
  } 
}
