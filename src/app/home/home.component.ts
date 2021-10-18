import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  index = 0;
  images = ['../assets/images/model_stairs.jpg', '../assets/images/lotion.jpg'];

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
