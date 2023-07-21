import { Component } from '@angular/core';

import {
  IconDefinition,
  faGlobe,
  faBarsStaggered
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  faGlobe: IconDefinition = faGlobe
  faBarsStaggered: IconDefinition = faBarsStaggered

}
