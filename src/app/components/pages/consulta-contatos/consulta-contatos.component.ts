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

  contatos: any[] = [];
  mensagem : string = '';

  constructor(
    private httpClient: HttpClient
  ){}

  
  ngOnInit(){
    this.httpClient.get('http://localhost:8081/api/contatos')
    .subscribe({
      next: (data) =>{
        this.contatos = data as any[];
      }
    });
  }

  excluirCliente(idContato:string){
    if(confirm('Deseja realmente exlcuir o cliente selecionado ?')){
      this.httpClient.delete('http://localhost:8081/api/contatos/'+idContato, {responseType: 'text'}
      ).subscribe({
        next:(data)=>{
          this.mensagem = data;
          this.ngOnInit();//chamando novamente a função que recarrega a pagina para que a exclusão possa refletir na tela.
        }
      })
    }
  }
}
