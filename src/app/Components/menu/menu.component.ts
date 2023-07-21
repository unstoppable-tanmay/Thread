import { Component } from '@angular/core';

import {
  faHouse,
  faMagnifyingGlass,
  faPenToSquare,
  faHeart,
  faUser,
  IconDefinition,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  // Icons
  faHouse: IconDefinition = faHouse;
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;
  faPenToSquare: IconDefinition = faPenToSquare;
  faHeart: IconDefinition = faHeart;
  faUser: IconDefinition = faUser;
  faRightFromBracket: IconDefinition = faRightFromBracket;
}
