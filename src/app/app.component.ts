import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmDetailsInputComponent } from './components/journal-details-input/film-details-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmDetailsInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'film-journal';
}
