import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Data {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  readonly test$: Observable<Data[]> = of([
    { id: 1, name: 'Test' },
    { id: 2, name: 'Hello' },
  ]);
}
