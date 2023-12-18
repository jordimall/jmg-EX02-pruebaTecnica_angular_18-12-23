import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../../services/serie.service';
@Component({
  selector: 'app-serie-show',
  standalone: true,
  imports: [],
  templateUrl: './serie-show.component.html',
  styleUrl: './serie-show.component.css',
})
export class SerieShowComponent implements OnInit {
  id: any;
  serie: any;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.serieService.getById(this.id).subscribe((data: any) => {
        this.serie = data;
      });
    }
  }
}
