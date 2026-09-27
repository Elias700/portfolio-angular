import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-technologies',
  imports: [ ScrollRevealDirective ],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {

  tecnologias = [
    {
      nome: 'Angular',
      categoria: 'Frontend',
      descricao: 'Framework para desenvolvimento de aplicações web.',
      icone: 'A',
    },
    {
      nome: 'TypeScript',
      categoria: 'Linguagem',
      descricao: 'Superset do JavaScript com tipagem estática.',
      icone: 'TS',
    },
    {
      nome: 'Java',
      categoria: 'Backend',
      descricao: 'Linguagem que estou estudando para desenvolvimento backend.',
      icone: 'JA',
    },
    {
      nome: 'POO',
      categoria: 'Programação',
      descricao: 'Programação Orientada a Objetos aplicada ao desenvolvimento de software.',
      icone: 'OOP',
    },
    {
      nome: 'Tailwind CSS',
      categoria: 'Estilização',
      descricao: 'Framework CSS utilitário para criação de interfaces.',
      icone: 'TW',
    },
    {
      nome: 'Git',
      categoria: 'Versionamento',
      descricao: 'Sistema de controle de versão para projetos.',
      icone: 'Git',
    },
    {
      nome: 'GitHub',
      categoria: 'Versionamento',
      descricao: 'Plataforma para hospedagem e colaboração em projetos.',
      icone: 'GH',
    },
    {
      nome: 'Figma',
      categoria: 'Design',
      descricao: 'Ferramenta para prototipação e design de interfaces.',
      icone: 'F',
    },
  ];
}