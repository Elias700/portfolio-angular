import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {

  private observer!: IntersectionObserver;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {

    this.renderer.addClass(
      this.element.nativeElement,
      'scroll-reveal'
    );

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            this.renderer.addClass(
              this.element.nativeElement,
              'scroll-reveal-show'
            );

            this.observer.unobserve(
              this.element.nativeElement
            );
          }

        });

      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(
      this.element.nativeElement
    );
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}