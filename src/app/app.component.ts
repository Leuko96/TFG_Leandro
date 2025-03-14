import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cineapp';
  contador = 0;

  incremetar(){
    this.contador++;
  }
  deincremetar(){
    this.contador--;
  }
}
