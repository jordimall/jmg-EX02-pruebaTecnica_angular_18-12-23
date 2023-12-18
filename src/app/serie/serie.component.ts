import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
    selector: 'app-serie',
    standalone: true,
    templateUrl: './serie.component.html',
    styleUrl: './serie.component.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class SerieComponent {

}
