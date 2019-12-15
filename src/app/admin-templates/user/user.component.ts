import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from './../../service/admin.service';

import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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

    this.subParam = this.ActivatedRoute.params.subscribe((params) => {
      this.taiKhoan = params.id;
    })

    this.subUser = this.AdminService.ThongTinTaiKhoan(this.taiKhoan).subscribe((result) => {
      this.user = result
      console.log(this.user)
    })


  }


}
