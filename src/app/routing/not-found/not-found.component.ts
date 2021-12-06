import {Component, OnInit} from '@angular/core';
import {GlobalVariables} from '../../shared/global-variables';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private globalVariables: GlobalVariables) {
  }

  ngOnInit() {
    this.globalVariables.setPage('404');
  }

}
