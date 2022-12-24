import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  eventEmitter: EventEmitter = new EventEmitter();

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.eventEmitter.on('login', (username) => {
      console.log('yo');
      this.username = username;
    });
  }

  logout() {
    this.authService.clearLocalStorage();
  }
}
