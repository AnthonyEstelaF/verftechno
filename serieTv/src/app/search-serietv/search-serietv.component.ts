import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StvService } from '../stv.service';

@Component({
  selector: 'app-search-serietv',
  templateUrl: './search-serietv.component.html',
  styleUrls: ['./search-serietv.component.css']
})
export class SearchSerietvComponent {

 query: string;
  obsSerie: Observable<Object>;
  res: any

  constructor(public sTV : StvService) { }

  submit(query : HTMLInputElement) : void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsSerie = this.sTV.searchSer(this.query);
    this.obsSerie.subscribe((data) => { this.res = data; console.log(this.res) });
  }

}
