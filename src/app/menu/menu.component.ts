import { Component, OnInit } from '@angular/core';
import { faPaw, faDonate, faNewspaper, faUsers, faCameraRetro} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pawIcon = faPaw;
  donateIcon = faDonate;
  newspaperIcon = faNewspaper;
  usersIcon = faUsers;
  cameraIcon = faCameraRetro;
  constructor() { }

  ngOnInit(): void {
  }


}
