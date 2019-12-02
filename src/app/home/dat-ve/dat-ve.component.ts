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


  public datVe;
  public phim;
  private subParam: Subscription;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private PhimService: PhimService
  ) { }

  ngOnInit() {

    this.phim = this.PhimService.phim;
    this.datVe = this.PhimService.datVe;

    console.log(this.phim)
    console.log(this.datVe)
  }
}