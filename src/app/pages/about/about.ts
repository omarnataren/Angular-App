import { Component } from '@angular/core';

interface Pokemon {
  name: string;
  type: string;
  hp: number;
  activate: boolean;
  velocidad: number;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})

export class About {

  heroes: string[] = ['Thor', 'Iron Man', 'Captain America'];

  pokemon: Pokemon = {
    name: 'charmander',
    type: 'Fuego',
    hp: 139,
    activate: true,
    velocidad: 100,
  }

  saludar() {
    return `¡Hola! Soy ${this.pokemon.name}, un Pokémon de tipo ${this.pokemon.type}.`;
  }
}
