import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-contatos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-contatos.component.html',
  styleUrl: './cadastro-contatos.component.css'
})
export class CadastroContatosComponent {

  mensagem: string = ''; //variavel que receber a mensagem de retorno da API

  constructor(
    private htttpClient: HttpClient
  ){}

  formulario_contato = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/) // Aceita (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
    ])    
  });
  
  //objeto para exibir na pagina as mensagens de validação de cada campo do formulário
  get f(){
    return this.formulario_contato.controls;
  }

  cadastrarContato(){
    this.htttpClient.post('http://localhost:8081/api/contatos',
    this.formulario_contato.value,
    {responseType: 'text'})
    .subscribe({
      next: (data) =>{
        this.mensagem = data;
        this.formulario_contato.reset();
      }
    })
  }
}
