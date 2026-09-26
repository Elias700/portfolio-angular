import { Component, inject } from '@angular/core';
import { CertificationsService, Certificado } from '../../certifications';
import { CertificationModal } from './certification-modal/certification-modal';

@Component({
  selector: 'app-certificados',
  imports: [ CertificationModal ],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certificados {

  private certificadosService = inject(CertificationsService);

  certifications = this.certificadosService.getCertificados();

  certificadoSelecionado: Certificado | null = null;

  abrirCertificado(certificado: Certificado): void {
    this.certificadoSelecionado = certificado;
  }

  fecharCertificado(): void {
    this.certificadoSelecionado = null;
  }
}