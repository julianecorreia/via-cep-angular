import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ViacepComponent} from './viacep/viacep.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViacepComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viacep';
}
