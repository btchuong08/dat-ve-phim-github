

import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from './../../service/admin.service';

import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('editForm', { static: false }) editForm: NgForm
  private subUser = new Subscription();
  private subParam: Subscription;
  taiKhoan: any = '';
  user: any = {};
  constructor(private AdminService: AdminService,
    private ActivatedRoute: ActivatedRoute, ) { }




  edit = (user) => {
    console.log(user)

  }
  ngOnInit() {


    this.taiKhoan = sessionStorage.getItem("username")


    this.subUser = this.AdminService.ThongTinTaiKhoan(this.taiKhoan).subscribe((result) => {

      this.user = result;
      this.user.loaiNguoiDung = sessionStorage.getItem("maLoaiNguoiDung")
      console.log(this.user)
      // console.log(sessionStorage.getItem("maLoaiNguoiDung"))

    })




  }


}
