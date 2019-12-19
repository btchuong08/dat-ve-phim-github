import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  public loading = true;

  public phim: any = {};
  public ngayChieuGioChieu: any = [];
  public ngayChieu: any = [];
  public GioChieu: any = [];

  public cumRap: any = [];
  public cumRapLogo: any = [];
  public tenCumRap: any = [];

  public xuatChieu: any = [];

  public maPhim;
  private subParam: Subscription;
  today = "";
  lichChieu: any = [];
  maLichChieu = "";
  isLogin: boolean = false;
  showLichChieu: boolean = false;
  showThongTin: boolean = false;
  showDanhGia: boolean = false;
  deduplicate(arr) {
    let set = new Set(arr);
    return Array.from(set);
  }

  public safeTrailerURL: string = "";
  showtrailer = (phim) => {
    this.safeTrailerURL = this.phim.trailer
    // this.safeTrailerURL = this.sanitizer.bypassSecurityTrustUrl(phim.trailer);
    // console.log(this.safeTrailerURL)

  }
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private PhimService: PhimService,
    private _location: Location,
    private router: Router


  ) { }

  timPhimTheoNgay = (tenCumRap, ngayChieu) => {
    let lichChieu = [];
    this.phim.lichChieu.map((item) => {
      if (item.thongTinRap.tenCumRap === tenCumRap && item.ngayChieuGioChieu.slice(0, 10) === ngayChieu) {
        lichChieu.push(item.ngayChieuGioChieu)
      }
    })
    return lichChieu

  }

  changeNgay = (ngay) => {
    this.today = ngay;

  }
  getListTenRap = (tenHeThongRap) => {
    let tenCumRap = [];
    let lichChieu = [];
    this.phim.lichChieu.map((item) => {
      if (item.thongTinRap.tenHeThongRap === tenHeThongRap) {
        tenCumRap.push(item.thongTinRap.tenCumRap)
      }
    })
    this.tenCumRap = this.deduplicate(tenCumRap);

    this.tenCumRap.map((item) => {
      lichChieu.push(this.timPhimTheoNgay(item, this.today))
    })
    this.lichChieu = lichChieu

  }
  muaVe = (ngayChieuGioChieu, tenCumRap) => {

    if (sessionStorage.getItem("username") !== null) {

      this.isLogin = true;

    } else {
      this.isLogin = false;
    }

    if (this.isLogin === false) {
      alert("Vui lòng đăng nhập trước khi mua vé!!!");
      this.router.navigate(['/', 'login']);
    } else {
      this.phim.lichChieu.map((item) => {
        if (item.ngayChieuGioChieu === ngayChieuGioChieu && item.thongTinRap.tenCumRap === tenCumRap) {
          this.maLichChieu = item.maLichChieu;
          this.router.navigate(['/', 'checkout', this.maLichChieu]);

        }
      })
    }


  }
  setDefault = (tenHeThongRap, ngayChieu) => {
    this.today = ngayChieu
    this.getListTenRap(tenHeThongRap);

  }

  ngOnInit() {

    this.loading = true;

    this.subParam = this.ActivatedRoute.params.subscribe((params) => {
      this.maPhim = params.id;
    })

    this.PhimService.LayChiTietPhim(this.maPhim).subscribe((phim: any) => {
      this.phim = phim;
      this.PhimService.phim = phim
      this.loading = false;
      this.cumRap = this.deduplicate(this.phim.lichChieu.map((item) => {
        return item.thongTinRap.tenHeThongRap
      }))

      this.cumRap.map((item) => {
        this.PhimService.heThongRap.map((item2) => {
          if (item2.tenHeThongRap === item) this.cumRapLogo.push(item2.logo)
        })
      })

      this.ngayChieu = this.deduplicate(this.phim.lichChieu.map((item) => {
        return item.ngayChieuGioChieu.slice(0, 10)
      })).slice(0, 7);


      this.setDefault(this.cumRap[0], this.ngayChieu[0])



      // this.loading = true;

    })



  }

}
