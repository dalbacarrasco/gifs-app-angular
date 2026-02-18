import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-opton.interface';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Gifs } from 'src/app/gifs/services/Gifs';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptions {

  gifService = inject(Gifs);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
