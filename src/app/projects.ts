import { Injectable } from '@angular/core';
import { Project } from './components/projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projetos: Project[] = [

    {
      nome: 'MoneyTrack',

      descricao:
        'Aplicação para controle financeiro pessoal, permitindo cadastrar despesas, organizar categorias e acompanhar o histórico financeiro.',

      tecnologias: [
        'Angular',
        'TypeScript',
        'Tailwind CSS'
      ],

      imagem: '/images/moneytrack.png',

      link: '#',

      github: '#'
    },

    {
      nome: 'GameExplorer',

      descricao:
        'Aplicação para exploração de jogos utilizando uma API externa, com busca, visualização de informações e interface responsiva.',

      tecnologias: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'API'
      ],

      imagem: '/images/gameexplorer.png',

      link: '#',

      github: '#'
    },

    {
      nome: 'Rota do Mar',

      descricao:
        'Guia digital para conhecer praias de Salvador, apresentando informações e experiências de forma simples e responsiva.',

      tecnologias: [
        'React',
        'TypeScript',
        'Tailwind CSS'
      ],

      imagem: '/images/rota-do-mar.png',

      link: '#',

      github: '#'
    }

  ];

  getProjetos(): Project[] {
    return this.projetos;
  }
}