import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {UsernameService} from '../../services/username.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = '';

  constructor(private authService: AuthService, private userService: UserService, private usernameService: UsernameService) {
  }

  ngOnInit() {
    this.usernameService.getUsernameObs().subscribe(username => this.username = username);
    if (this.authService.isLoggedIn()) {
      this.setUsername();
    }
  }

  setUsername() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.username = user.username;
    });
  }


  logout() {
    this.authService.clearLocalStorage();

  }
}
