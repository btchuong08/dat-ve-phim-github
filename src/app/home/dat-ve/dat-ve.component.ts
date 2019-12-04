import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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




  getDayGhe = () => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str2 = '1234567891234567';
    let a = this.DanhSachPhongVe.danhSachGhe.length / 16;
    this.anphabet = str.split('').slice(0, this.DanhSachPhongVe.danhSachGhe.length / 16);
    this.indexGhe = str2.split('')
  }

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private PhimService: PhimService

  ) { }

  ngOnInit() {
    this.subParam = this.ActivatedRoute.params.subscribe((params) => {
      this.maLichChieu = params.maLichChieu;

    })


    this.PhimService.LayDanhSachPhongVe(this.maLichChieu).subscribe((DanhSachPhongVe: any) => {

      console.log(DanhSachPhongVe);

      this.DanhSachPhongVe = DanhSachPhongVe;
      this.getDayGhe();

    })
  }
}