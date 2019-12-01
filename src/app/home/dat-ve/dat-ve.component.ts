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


  public maPhim;
  public phim;
  private subParam: Subscription;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private PhimService: PhimService
  ) { }

  ngOnInit() {

    this.subParam = this.ActivatedRoute.params.subscribe((params) => {
      this.maPhim = params.maPhim;
    })

    this.PhimService.LayChiTietPhim(this.maPhim).subscribe((phim: any) => {
      this.phim = phim


    })

  }
}