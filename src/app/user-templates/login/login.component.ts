import { PhimService } from './../../service/phim.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  @ViewChild('loginForm', { static: false }) loginForm: NgForm
  private subLogin = new Subscription();
  error: any = '';
  isLogin: boolean = false;
  loading: boolean = false;
  constructor(
    private PhimService: PhimService,
    private router: Router,
    private _location: Location

  ) { }

  setValue = () => {
    this.loginForm.setValue({
      name: 'dpnguyen',
      password: '123456'

    })

  }
  login = (user) => {
    this.error = '';
    this.loading = true;
    var data = {
      "taiKhoan": user.user,
      "matKhau": user.password
    };


    setTimeout(() => {

      this.PhimService.DangNhap(data).subscribe((result) => {
        this.isLogin = true;
        this.error = '';
        this.loading = false
        console.log(result);
        sessionStorage.setItem("username", result.taiKhoan);
        sessionStorage.setItem("maLoaiNguoiDung", result.maLoaiNguoiDung);
        sessionStorage.setItem("accessToken", result.accessToken);
        // const accessToken = sessionStorage.getItem('accessToken');
        // console.log(accessToken);
        // const tokenPayload = decode(accessToken);
        // console.log(tokenPayload);
        // // console.log(tokenPayload.http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name);

        setTimeout(() => {
          this._location.back();
        }, 1000);




      }
        , err => {
          this.loading = false
          console.log(err);
          this.error = err._body;
          this.isLogin = false;
        });



    }, 2000);


  }
  ngOnInit() {
    if (sessionStorage.getItem("accessToken") !== null)
      this.router.navigate(['']);

  }

  //   ngAfterViewInit() {
  //   this.setValue()
  //   }
}


