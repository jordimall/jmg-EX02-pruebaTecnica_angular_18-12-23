import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
    selector: 'app-pelicula',
    standalone: true,
    templateUrl: './pelicula.component.html',
    styleUrl: './pelicula.component.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class PeliculaComponent {

}
