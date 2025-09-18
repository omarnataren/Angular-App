import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
export const routes: Routes = [ 
    { path: 'acercade', component: About },
    { path: 'home', component: Home },
    { path: 'productos', component: Productos },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
