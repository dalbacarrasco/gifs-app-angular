import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Gifs } from '../../services/Gifs';
import { ScrollState } from 'src/app/shared/services/scroll-state';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html'
})
export default class TrendingPage implements AfterViewInit {
  gifService = inject(Gifs);
  scrollState = inject(ScrollState);
  scrollDivRef = viewChild<ElementRef>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollState.trendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollState.trendingScrollState.set(scrollTop);
    if (isAtBottom) {
      this.gifService.loadTrendigGifs();
    }
  }

}
