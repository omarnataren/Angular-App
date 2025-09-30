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
  imports: [ ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})

export class About {
  myName: string = 'Omar Alejandro Nataren Arredondo';
  verInfo: boolean = false;
  artistas: string[] = ['The Weeknd', 'Travis Scott', 'Drake', 'Bad Bunny', 'Kendrick Lamar'];
  information = {
    age: 20,
    email: "omar@outlook.com",
    phone: "9511714380",
    nationality: "Mexican",
    favorite_framework: "React"
  }

  verInformation(): void {
    this.verInfo = !this.verInfo;
  }
}
