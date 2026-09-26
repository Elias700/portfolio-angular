import { Injectable } from '@angular/core';
import { Certificado } from './components/certifications/certifications.model';

export type { Certificado };

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  private certificados: Certificado[] = [

    {
      titulo: 'Frond-end',
      instituicao: 'Salvador Tech & Unifel Educação Corporativa',
      ano: 2024,
      imagem: '/certifications/unifel.png'
    },

    {
      titulo: 'HTML & CSS',
      instituicao: 'Profissão Programador',
      ano: 2024,
      imagem: '/certifications/profissao-programador-html&css.png'
    },

    {
      titulo: 'Programa de Residência em Software - Fase 1',
      instituicao: 'CEPEDI - Coordenado pela Softex e promovido pelo Ministério da Ciência, Tecnologia e Inivação.',
      ano: 2024,
      imagem: '/certifications/residencia-fase1.png'
    },

    {
      titulo: 'Programa de Residência em Software - Fase 2',
      instituicao: 'CEPEDI - Coordenado pela Softex e promovido pelo Ministério da Ciência, Tecnologia e Inivação.',
      ano: 2025,
      imagem: '/certifications/residencia-fase2.png'
    },

    {
      titulo: 'CSS',
      instituicao: 'Hora de Codar',
      ano: 2024,
      imagem: '/certifications/hora-de-codar-css.png'
    },

    {
      titulo: 'Figma para Devs',
      instituicao: 'Ada Tech',
      ano: 2025,
      imagem: '/certifications/ada-tech-figma.png'
    },

    {
      titulo: 'Git e Versionamento',
      instituicao: 'Ada Tech',
      ano: 2024,
      imagem: '/certifications/ada-tech-git&github.png'
    },

  ];

  getCertificados(): Certificado[] {
    return this.certificados;
  }

}