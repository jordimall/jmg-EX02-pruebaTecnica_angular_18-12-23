import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
@Component({
  selector: 'app-pelicula-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pelicula-list.component.html',
  styleUrl: './pelicula-list.component.css',
})
export class PeliculaListComponent implements OnInit {
  peliculaList: any[] = [];
  actualPage: number = 1;
  minPage: number = 1;
  maxPage: number = 1;
  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.getAll(this.actualPage).subscribe(
      (data: any) => {
        this.peliculaList = data.results;
        this.actualPage = data.page;
        this.maxPage = data.total_pages;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  modifyPage = (num: number): void => {
    this.actualPage = num;
    this.ngOnInit();
  };

  decrementNumPage = (): void => {
    this.actualPage--;
    this.ngOnInit();
  };

  incrementNumPage = (): void => {
    this.actualPage++;
    this.ngOnInit();
  };
}
