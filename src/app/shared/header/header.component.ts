import {Component, OnInit} from '@angular/core';
import {GlobalVariables} from '../global-variables';
import {AuthService} from '../../services/auth.service';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private globalVariables: GlobalVariables, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(async (user) => {
      this.username = user.username;
    });
    this.setHeaderStylingByPage();
  }

  setHeaderStylingByPage() {
    const buttons = document.getElementsByTagName('button');
    if (this.globalVariables.getPage() === 'login') {
      Array.from(buttons).forEach((button) => {
        if (button !== document.getElementById('submit') && button !== document.getElementById('cancel')) {
          button.disabled = true;
          button.style.display = 'none';
        }
      });
    } else {
      Array.from(buttons).forEach((button) => {
        button.disabled = false;
        button.style.display = 'default';
      });
    }
  }

  logout() {
    this.authService.clearLocalStorage();
  }
}
