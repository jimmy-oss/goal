import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    // this.elem.nativeElement.style.textDecoration='mark';

   }

  @HostListener("click") onClicks(){
    this.textHighlight("mark");
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textHighlight("None");
  }

   private textHighlight(action: string){
     this.elem.nativeElement.style.textDecoration=action;
   }

}
