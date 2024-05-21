import { Directive,ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appMan]',
  standalone: true
})
export class ManDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.border = '2px solid red';
  }
  @HostListener("mouserover") onMouseOver(){
    this.elementRef.nativeElement.style.border = '2px solid green';

  }
}
