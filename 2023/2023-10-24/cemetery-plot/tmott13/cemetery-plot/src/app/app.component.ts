import { Component } from '@angular/core';

export interface Plot {
  name: string;
  funFact: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cemetery-plot';
  plot = [
    { name: 'Bob Marley', funFact: 'Such a legend' },
    { name: 'Liv Tyler', funFact: 'Began modeling at 14' },
    { name: 'Lucas Black', funFact: 'Last name is Black' },
    { name: 'Tom Hanks', funFact: 'Awesome actor' },
    { name: 'Roger Moore', funFact: 'Last name is Moore' },
    { name: 'Nicole Kidman', funFact: 'Such a great actress' },
  ];
}
