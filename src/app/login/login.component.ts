import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNameEmitter: EventEmitter = new EventEmitter();
  loginForm: FormGroup;
  authorized = true;

  constructor(private userService: UserService, private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      loginUsername: new FormControl(),
      loginPassword: new FormControl()
    });
  }

  login() {
    const username = this.loginForm.controls.loginUsername.value;
    const password = this.loginForm.controls.loginPassword.value;

    this.userService.login(username, password).subscribe(async (response) => {
        const token = response.headers.get('Authorization');
        this.authService.storeToken(token);
        this.userNameEmitter.emit('login', username);

        await this.router.navigate(['/home']).then(() => {
        });
      },
      () => {
        this.authorized = false;
      }
    );
  }
}
