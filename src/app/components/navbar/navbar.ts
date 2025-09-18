import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface menuItem {
  name: string;
  route: string;
}
@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuList: menuItem[] = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/acercade' },
    { name: 'Productos', route: '/productos' }
  ];
}
