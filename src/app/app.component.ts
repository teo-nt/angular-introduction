import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Teo';

  person0: Person = {
    givenName: "Teo",
    surName: "Nt",
    age: 20,
    email: "thod_ntonas@hotmail.com",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 20,
    email: "john@hotmail.com",
    address: "New York, USA"
  }
}
