import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from './../../services/pelicula.service';

@Component({
  selector: 'app-pelicula-show',
  standalone: true,
  imports: [],
  templateUrl: './pelicula-show.component.html',
  styleUrl: './pelicula-show.component.css',
})
export class PeliculaShowComponent implements OnInit{
  id: any;
  pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculaService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.peliculaService.getById(this.id).subscribe((data: any) => {
        console.log(data)

        this.pelicula = data;
      });
    }
  }
}
