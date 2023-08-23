import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostListener('window:keydown', ['$event']) windowKeyUp($event) {
    switch ($event.key) {
      case "ArrowLeft":
        this.applyColor('blue');
        break;
      case "ArrowRight":
        this.applyColor('purple');
        break;
      case "ArrowUp":
        this.applyColor('yellow');
        break;
      case "ArrowDown":
        this.applyColor('red');
        break;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private applyColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
