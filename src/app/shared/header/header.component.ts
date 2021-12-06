import {Component, OnInit} from '@angular/core';
import {GlobalVariables} from '../global-variables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private globalVariables: GlobalVariables) {
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
}
