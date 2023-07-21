import { Component, Input } from '@angular/core';

import {
  faEllipsis,
  faPlus,
  IconDefinition,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';

import {
  faHeart,
  faComment,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input()
  feed!: {
    image: string;
    name: string;
    data: string;
    text: boolean;
    like: number;
    replies: number;
    time: number;
  };

  // Icons
  faEllipsis: IconDefinition = faEllipsis;
  faPlus: IconDefinition = faPlus;

  faHeart: IconDefinition = faHeart;
  faComment: IconDefinition = faComment;
  faArrowsRotate: IconDefinition = faArrowsRotate;
  faPaperPlane: IconDefinition = faPaperPlane;
}
