import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[prevdefault]'
})
export class PrevdefaultDirective {

  constructor(
    private el: ElementRef
  ) {}

  @HostListener('click') onClick() {
    // prevent default to execute
    return false;
  }

}
