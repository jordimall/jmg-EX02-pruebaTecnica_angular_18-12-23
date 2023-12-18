import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptorInterceptor } from './helpers/auth-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideHttpClient(withInterceptors([authInterceptorInterceptor]))]
};
