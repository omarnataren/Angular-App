import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
export const routes: Routes = [ 
    { path: 'acercade', component: About },
    { path: 'home', component: Home },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
