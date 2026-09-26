import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-home',
  imports: [ ScrollRevealDirective ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
