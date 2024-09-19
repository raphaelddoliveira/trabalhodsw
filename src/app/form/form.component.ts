import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'store-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  Form: FormGroup;
  formSubmitted: boolean = false; 

  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      primeiroNome: [''],
      segundoNome: [''],
      endereco: [''],
      telefone: [''],
      email: [''],
      observacao: ['']
    });
  }

  onSubmit() {
    if (this.Form.valid) {
      this.formSubmitted = true; 
      this.Form.reset(); 
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }
}
