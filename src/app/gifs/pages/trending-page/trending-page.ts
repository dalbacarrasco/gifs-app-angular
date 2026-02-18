import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { List } from "../../components/list/list";
import { Gifs } from '../../services/Gifs';

@Component({
  selector: 'app-trending-page',
  imports: [List],
  templateUrl: './trending-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPage {
  gifService = inject(Gifs);

}
