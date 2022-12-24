import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  index = 0;
  images = ['https://primedia.primark.com/i/primark/210070147-01?w=1000&h=1000&img404=missing_product&v=1638144666104&locale=nl-*,en-*,*',
    'https://primedia.primark.com/i/primark/210067018-01?w=1000&h=1000&img404=missing_product&v=1638145689433&locale=nl-*,en-*,*',
    'https://primedia.primark.com/i/primark/210066420-01?w=1000&h=1000&img404=missing_product&v=1638145755132&locale=nl-*,en-*,*'];

  constructor() {
  }

  ngOnInit() {
  }

  changeImageNext() {
    this.index++;
    if (this.index === this.images.length) {
      this.index = 0;
    }
    const image = document.getElementById('sliderImage');
    if (image instanceof HTMLImageElement) {
      image.src = this.images[this.index];
    }
  }


  changeImagePrev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    const a = document.getElementById('sliderImage');
    if (a instanceof HTMLImageElement) {
      a.src = this.images[this.index];
    }

  }
}
