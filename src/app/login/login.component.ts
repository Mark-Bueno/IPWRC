import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {GlobalVariables} from '../shared/global-variables';
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authorized = true;

  constructor(private userService: UserService, private router: Router, private globalVariables: GlobalVariables,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.globalVariables.setPage('login');
    this.loginForm = new FormGroup({
      loginUsername: new FormControl(),
      loginPassword: new FormControl()
    });
  }

  login() {
    const username = this.loginForm.controls.loginUsername.value;
    const password = this.loginForm.controls.loginPassword.value;

    this.userService.login(username, password).subscribe((response) => {
        const token = response.headers.get('Authorization');
        this.tokenService.store(token);
        console.log(this.tokenService.getAuthorizationHeader());
        this.router.navigate(['/home']);
      },
      errorResponse => {
        this.authorized = false;
      }
    );
  }
}
