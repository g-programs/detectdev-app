import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Nav - in the app component (appears on every page of the app)
//HomeView
//AboutView
//ConnectView
//ThoughtView

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'detectdev-app';
}
