import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
})
export class SerieListComponent implements OnInit {
  seriesList: any[] = [];
  actualPage: number = 1;
  minPage: number = 1;
  maxPage: number = 1;
  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getAll(this.actualPage).subscribe(
      (data: any) => {
        this.seriesList = data.results;
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
