import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Gifs } from '../../services/Gifs';
import { List } from "../../components/list/list";
@Component({
  selector: 'app-git-history',
  imports: [List],
  templateUrl: './git-history.html',
})
export default class GitHistory {

  gifService = inject(Gifs);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  })
}
