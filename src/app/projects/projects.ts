import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.html',
    styleUrl: './projects.css'
})
export class Projects {

    projetos = [

        {
            nome: 'E-Commerce Platform',

            descricao:
                'Plataforma completa de vendas online com carrinho de compras em tempo real, checkout integrado e painel administrativo.',

            tecnologias: [
                'React',
                'Node.js',
                'MongoDB',
                'Stripe'
            ],

            imagem: '',

            link: '#',

            github: '#'
        },

        {
            nome: 'Dashboard Analytics',

            descricao:
                'Painel de controle corporativo com visualização de dados financeiros, performance de campanhas e inteligência de negócios.',

            tecnologias: [
                'React',
                'TypeScript',
                'D3.js',
                'Tailwind'
            ],

            imagem: '',

            link: '#',

            github: '#'
        },

        {
            nome: 'App de Finanças',

            descricao:
                'Aplicativo de gestão financeira pessoal com organização bancária automatizada, controle de orçamento e gráficos preditivos.',

            tecnologias: [
                'React Native',
                'Express',
                'PostgreSQL'
            ],

            imagem: '',

            link: '#',

            github: '#'
        },

        {
            nome: 'Blog Pessoal',

            descricao:
                'Website pessoal minimalista focado em performance, SEO e acessibilidade, com sistema integrado de gerenciamento de posts.',

            tecnologias: [
                'Next.js',
                'GraphQL',
                'Markdown'
            ],

            imagem: '',

            link: '#',

            github: '#'
        },

        {
            nome: 'Sistema de Gestão',

            descricao:
                'ERP modular para controle de estoque, emissão de notas fiscais eletrônicas e gestão integrada de fluxo de caixa corporativo.',

            tecnologias: [
                'React',
                'Node.js',
                'MySQL',
                'AWS'
            ],

            imagem: '',

            link: '#',

            github: '#'
        },

        {
            nome: 'Landing Page Startup',

            descricao:
                'Página de conversão otimizada com alta taxa de entrega, animações fluidas e interface em formulário de captação de leads.',

            tecnologias: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'GSAP'
            ],

            imagem: '',

            link: '#',

            github: '#'
        }

    ];

}