import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SerieComponent } from './serie/serie.component';
import { SerieListComponent } from './serie/serie-list/serie-list.component';
import { SerieShowComponent } from './serie/serie-show/serie-show.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculaListComponent } from './pelicula/pelicula-list/pelicula-list.component';
import { PeliculaShowComponent } from './pelicula/pelicula-show/pelicula-show.component';
import { isloggedGuard } from './guards/islogged.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  { path: 'home', component: HomeComponent, canActivate: [isloggedGuard] },
  {
    path: 'serie',
    component: SerieComponent,
    canActivate: [isloggedGuard],
    children: [
      { path: '', component: SerieListComponent },
      { path: 'show/:id', component: SerieShowComponent },
    ],
  },
  {
    path: 'pelicula',
    component: PeliculaComponent,
    canActivate: [isloggedGuard],
    children: [
      { path: '', component: PeliculaListComponent },
      { path: 'show/:id', component: PeliculaShowComponent },
    ],
  },
];
