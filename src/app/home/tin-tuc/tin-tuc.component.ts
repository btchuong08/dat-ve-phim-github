import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {

loading: boolean = false;
  dienAnh: boolean = true;
  review: boolean = false;
  khuyenMai: boolean = false;
  xemThem: boolean = false;
  constructor() { }

  getDienAnh = () => {
    this.loading=true;
setTimeout(()=>{

  this.dienAnh = true;
  this.review = false;
  this.khuyenMai = false;
  this.loading=false;
},2000)

   
  }

  getReview = () => {
    this.loading=true;
    setTimeout(()=>{
  
      this.dienAnh = false;
      this.review = true;
      this.khuyenMai = false;
      this.loading=false;
    },2000)
   
  }

  getKhuyenMai = () => {
    this.loading=true;
    setTimeout(()=>{
      this.dienAnh = false;
      this.review = false;
      this.khuyenMai = true;
      this.loading=false;


    },2000)
    
  }
  setXemThem = () => {
    this.loading=true;
    setTimeout(()=>{
  
      this.xemThem = !this.xemThem;
      this.loading=false;
    },2000)

  
  }
  ngOnInit() {
  }

}
