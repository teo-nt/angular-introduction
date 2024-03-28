import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Teo';

  person = {
    givenName: "Teo",
    surname: "Nt",
    email: "thod_ntonas@hotmail.com"
  }
}
