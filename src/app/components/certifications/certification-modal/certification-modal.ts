import { Component, input, output } from '@angular/core';
import { Certificado } from '../certifications.model';

@Component({
  selector: 'app-certification-modal',
  imports: [],
  templateUrl: './certification-modal.html',
  styleUrl: './certification-modal.css'
})
export class CertificationModal {

  certificado = input<Certificado | null>(null);

  fechar = output<void>();

  fecharModal(): void {
    this.fechar.emit();
  }

}