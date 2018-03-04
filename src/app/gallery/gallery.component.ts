import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  showModal = false;
  modalImage: string;
  images = [
    "assets/images/carousel/one.jpeg",
    "assets/images/carousel/two.png",
    "assets/images/carousel/three.png",
    "assets/images/carousel/four.png",
    "assets/images/carousel/five.png",
    "assets/images/carousel/one.jpeg",
    "assets/images/carousel/two.png",
    "assets/images/carousel/three.png",
    "assets/images/carousel/four.png",
    "assets/images/carousel/five.png",
    "assets/images/carousel/one.jpeg",
    "assets/images/carousel/two.png",
  ];

  constructor() { }

  ngOnInit() {
  }

  zoomImage(image: string) {
    this.showModal = true;
    this.modalImage = image;
  }
}
