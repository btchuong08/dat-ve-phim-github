import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit {


  public maLichChieu;
  public phim;
  private subParam: Subscription;
  DanhSachPhongVe: any;
  vip = "Vip";
  anphabet: any;
  indexGhe: any;
  danhSachGheChon: any = [];
  tongTien: any = 0;

  isLogin: boolean = false;
  username: any = "";



  getDayGhe = () => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str2 = '1234567891234567';
    let a = this.DanhSachPhongVe.danhSachGhe.length / 16;
    this.anphabet = str.split('').slice(0, this.DanhSachPhongVe.danhSachGhe.length / 16);
    this.indexGhe = str2.split('')
  }

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private PhimService: PhimService,
    private router: Router

  ) { }


  selectedGhe = (ghe) => {

    this.DanhSachPhongVe.danhSachGhe.map((item, index) => {
      if (item.maGhe === ghe.maGhe) {
        this.DanhSachPhongVe.danhSachGhe[index].selected = !this.DanhSachPhongVe.danhSachGhe[index].selected

        if (this.DanhSachPhongVe.danhSachGhe[index].selected === true) {
          this.danhSachGheChon.push(item);
          this.tongTien = this.tongTien + item.giaVe;
        } else {
          let index1 = this.danhSachGheChon.findIndex((item) => {
            return item.maGhe === ghe.maGhe
          });



          if (index1 != -1) {
            this.danhSachGheChon.splice(index1, 1);
          }
          this.tongTien = this.tongTien - item.giaVe;
        }
      }

    })


  }


  datVe = () => {
    alert("Bạn đã đặt " + this.danhSachGheChon.length + " vé, trở về Trang Chủ...");
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.subParam = this.ActivatedRoute.params.subscribe((params) => {
      this.maLichChieu = params.maLichChieu;

    })


    this.PhimService.LayDanhSachPhongVe(this.maLichChieu).subscribe((DanhSachPhongVe: any) => {



      this.DanhSachPhongVe = DanhSachPhongVe;
      this.DanhSachPhongVe.danhSachGhe.map((item, index) => {
        this.DanhSachPhongVe.danhSachGhe[index].selected = false;
      })
      this.getDayGhe();


      if (sessionStorage.getItem("username") !== null) {

        this.isLogin = true;

      } else {
        this.isLogin = false;
      }
     
      this.username = sessionStorage.getItem("username").slice(0,1).toUpperCase()


    })
  }
}