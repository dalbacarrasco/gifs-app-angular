import { Component, inject, signal } from '@angular/core';
import { List } from "../../components/list/list";
import { Gifs } from '../../services/Gifs';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [List],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifService = inject(Gifs);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe(
      response => {
        this.gifs.set(response);
      }
    )
  }
}
