import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Certifications } from './components/certifications/certifications';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About, Projects, Contact, Footer, Certifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
