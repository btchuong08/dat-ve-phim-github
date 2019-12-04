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
    })
  }
}