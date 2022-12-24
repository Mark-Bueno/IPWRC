import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {EventEmitter} from 'events';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = '';

  constructor(private authService: AuthService, private userService: UserService, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(username => this.username = username);
  }

  setUsername(username) {
    this.username = username;
  }


  logout() {
    this.authService.clearLocalStorage();
  }
}
