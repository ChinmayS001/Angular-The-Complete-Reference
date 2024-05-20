import { Directive, ElementRef } from '@angular/core';
import { OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit, Renderer2 {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
