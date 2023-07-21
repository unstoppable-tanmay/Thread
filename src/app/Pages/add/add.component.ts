import { Component } from '@angular/core';

import { IconDefinition, faXmark,faPaperclip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  faXmark: IconDefinition = faXmark;
  faPaperclip: IconDefinition = faPaperclip;
  
  user = {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg',
    name: 'Melva Padilla',
    data: 'Fugiat exercitation laboris occaecat reprehenderit nostrud cillum dolor id nulla mollit qui.',
    text: false,
    like: 3,
    replies: 15,
    time: 5,
  };
}
