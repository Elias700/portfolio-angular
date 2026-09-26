import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-contact',
  imports: [ 
    ContactForm,
    ScrollRevealDirective 
],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}