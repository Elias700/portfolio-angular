import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  nome = '';
  email = '';
  mensagem = '';

  enviarMensagem(formulario: NgForm) {
    console.log('Mensagem enviada!');
    formulario.reset();
  }

}
