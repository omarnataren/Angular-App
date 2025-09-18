import { Routes } from '@angular/router';
import { About } from './pages/about/about';

export const routes: Routes = [ 
    { path: 'acercade', component: About },
    { path: '**', redirectTo: 'acercade', pathMatch: 'full' }
];
