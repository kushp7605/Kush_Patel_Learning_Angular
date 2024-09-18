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
  title = 'Kush_Patel_Learning_Angular';
  message: string = 'Hello, Welcome to my angular projects. Here, I will create some cool projects!'
  favNumber: number = 7;
}