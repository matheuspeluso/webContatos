// Arquivo de configuração utilizado para habilitar recursos / bibliotecas que serão utilizados nos componentes.

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient() // biblioteca do angular para fazer requisições HTTP.
  ]
};
