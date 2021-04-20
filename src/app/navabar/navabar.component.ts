import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, networkGlobeIcon} from '@cds/core/icon';


@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {

  constructor() { 
    ClarityIcons.addIcons(userIcon);
    ClarityIcons.addIcons(networkGlobeIcon);
  }

  ngOnInit(): void {
  }

}
