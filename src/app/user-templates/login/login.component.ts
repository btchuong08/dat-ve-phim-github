import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  private subLogin = new Subscription();
  error: any = '';
  isLogin: boolean = false;
  constructor(
    private PhimService: PhimService,

  ) { }
  login = (user) => {
    var data = {
      "taiKhoan": user.user,
      "matKhau": user.password
    };

    this.PhimService.DangNhap(data).subscribe((result) => {
      this.isLogin = true;
      this.error = '';

    }
      , err => {
        console.log(err);
        this.error = err._body;
        this.isLogin = false;
      });

  }
  ngOnInit() {
  }

}
