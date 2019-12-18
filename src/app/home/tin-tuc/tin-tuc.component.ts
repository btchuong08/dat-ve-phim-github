import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {


  dienAnh: boolean = true;
  review: boolean = false;
  khuyenMai: boolean = false;
  xemThem: boolean = false;
  constructor() { }

  getDienAnh = () => {
    this.dienAnh = true;
    this.review = false;
    this.khuyenMai = false;
  }

  getReview = () => {
    this.dienAnh = false;
    this.review = true;
    this.khuyenMai = false;
  }

  getKhuyenMai = () => {
    this.dienAnh = false;
    this.review = false;
    this.khuyenMai = true;
  }
  setXemThem = () => {
    this.xemThem = !this.xemThem
  }
  ngOnInit() {
  }

}
