import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides = [
    {
      img: "https://s3img.vcdn.vn/123phim/2019/11/khun-15736347918272.jpg",
      alt: "First slide",
      active: "active",
      trailer: "https://www.youtube.com/embed/5tDRh-68TvY"
    },
    {
      img: "https://s3img.vcdn.vn/123phim/2019/11/doctor-sleep-15731812200851.jpg",
      alt: "Second slide",
      active: "",
      trailer: "https://www.youtube.com/embed/BOzFZxB-8cw"
    },
    {
      img: "https://s3img.vcdn.vn/123phim/2019/11/charlie-s-15737864768917.jpg",
      alt: "Third slide",
      active: "",
      trailer: "https://www.youtube.com/embed/yecv7dLVkYk"
    }

  ];

  public safeTrailerURL: string = "";
  showtrailer = (phim) => {
    this.safeTrailerURL = phim.trailer
    // this.safeTrailerURL = this.sanitizer.bypassSecurityTrustUrl(phim.trailer);
    // console.log(this.safeTrailerURL)

  }
  constructor(private PhimService: PhimService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
