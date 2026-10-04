import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferencesComponent } from './pages/conferences/conferences';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'conferences',
    component: ConferencesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];