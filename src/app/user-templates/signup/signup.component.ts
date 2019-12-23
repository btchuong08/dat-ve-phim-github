import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  error: any = '';
  creatUsersuccess: boolean = false;
accept:boolean=false;
  signup = (user) => {
    user = {
      ...user,
      "maNhom": "GP01",
      "maLoaiNguoiDung": "KhachHang",
    }

    this.AdminService.DangKy(user).subscribe((result) => {

      this.error = '';
      console.log(result);
      this.creatUsersuccess = true;


    }
      , err => {
        console.log(err);
        this.error = err._body;

      });
  }

  acceptTerm =() =>{
this.accept=!this.accept
  }
  constructor(private AdminService: AdminService,
    private router: Router, ) { }
  ngOnInit() {

    if (sessionStorage.getItem("accessToken") !== null)
      this.router.navigate(['']);
  }

}
