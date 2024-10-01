//Arquivo de configuração para criação de rotas de navegação nos componentes.


import { Routes } from '@angular/router';
import { CadastroContatosComponent } from './components/pages/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/pages/consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from './components/pages/edicao-contatos/edicao-contatos.component';

export const routes: Routes = [
    {
        path: 'pages/contatos/cadastro',
        component: CadastroContatosComponent
    },
    {
        path: 'pages/contatos/consulta',
        component: ConsultaContatosComponent
    },
    {
        path: 'pages/contatos/edicao',
        component: EdicaoContatosComponent
    },
    //redirecinador para pagina Home
    {
        path: '', pathMatch: 'full',
        redirectTo: '/pages/contatos/consulta'
    }
];
