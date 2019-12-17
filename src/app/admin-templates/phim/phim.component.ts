import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdminService } from './../../service/admin.service';

import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {

  public maPhim:any;
  public Phim:any;
  private subParam: Subscription;
  constructor( private ActivatedRoute: ActivatedRoute,
    private PhimService: PhimService) { }

  ngOnInit() {

    this.subParam = this.ActivatedRoute.params.subscribe((params) => {
      this.maPhim = params.id;
     
    })

    this.PhimService.LayChiTietPhim(this.maPhim).subscribe((result)=>{

      this.Phim= result;
      console.log(this.Phim)
    })
  }

}
