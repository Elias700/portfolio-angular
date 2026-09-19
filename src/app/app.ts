import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { About } from './components/about/about';
import { Projects } from './projects/projects';
import { Certificados } from './components/certificados/certificados';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About, Projects, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
