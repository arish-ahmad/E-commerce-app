import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecomm-frontend';
  cancelIcon=faXmark;
  userIcon =faUser;
  navBar(sidenav:MatSidenav){
    return sidenav;
  }
  
}
