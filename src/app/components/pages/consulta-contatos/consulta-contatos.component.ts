import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-contatos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './consulta-contatos.component.html',
  styleUrl: './consulta-contatos.component.css'
})
export class ConsultaContatosComponent {

  //atributo para guardar os dados que vem da requisição http
  contatos: any[] = [];

  constructor(
    private httpClient: HttpClient
  ){}
  //função ngOinit é executada sempre que o componnete é abeto
  ngOnInit(){
    this.httpClient.get('http://localhost:8081/api/contatos')
    .subscribe({
      next: (data) =>{
        this.contatos = data as any[];
      }
    });

  }

}
