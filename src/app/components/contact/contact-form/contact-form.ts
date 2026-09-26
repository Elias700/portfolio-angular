import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ FormsModule ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  enviarMensagem(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }

    console.log('Mensagem enviada!');
    console.log(formulario.value);

    formulario.resetForm();
  }

}


