import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['./code1.jpg', './code2.jpg', './code3.jpg'];
  headlines = ['bring engineering to the next level', 'born to code', 'graduated at TUM'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(()=>{
        this.showImage = true;
      }, 10)
    }, 8000);
  }

}
