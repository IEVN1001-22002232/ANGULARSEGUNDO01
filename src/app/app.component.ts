import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { AporBComponent } from './formularios/apor-b/apor-b.component';


// MultiplicacionComponent se lo quite, distancia, aporb
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AporBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';


  ngOnInit(): void {
    initFlowbite();
  }
}
