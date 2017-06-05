import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola';
  author = 'Leonardo';
  count = 0;
  imageSource = '../../favicon.ico';
  disabled = true;
}
