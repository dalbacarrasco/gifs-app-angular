import { Component, input } from '@angular/core';
import { ListItem } from "./list-item/list-item";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'list',
  imports: [ListItem],
  templateUrl: './list.html',
})
export class List {
  gifs = input.required<Gif[]>();
 }
