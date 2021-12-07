import {Component, OnInit} from '@angular/core';
import {GlobalVariables} from '../global-variables';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private globalVariables: GlobalVariables, private tokenService: TokenService) {
  }

  ngOnInit() {
    this.setHeaderStylingByPage();
  }

  setHeaderStylingByPage() {
    const buttons = document.getElementsByTagName('button');
    if (this.globalVariables.getPage() === 'login') {
      Array.from(buttons).forEach((button) => {
        if (button !== document.getElementById('submit')) {
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
    this.tokenService.removeToken();
  }
}
