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

  constructor(
    private htttpClient: HttpClient
  ){}

  formulario_contato = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required]),
    telefone: new FormControl('', [Validators.required])
  });

  cadastrarContato(){
    this.htttpClient.post('http://localhost:8081/api/contatos',
    this.formulario_contato.value,
    {responseType: 'text'})
    .subscribe({
      next: (data) =>{
        alert(data);
      }
    })
  }


}
