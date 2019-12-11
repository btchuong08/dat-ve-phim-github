import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(
    private Router :Router
  ) { }
  isLogin: boolean = false;
  username: any = '';
  maLoaiNguoiDung: any = ''

  logout = () => {
    alert("Bạn muốn đăng xuất? ")
    // sessionStorage.removeItem("username");
    sessionStorage.clear();
    this.isLogin = false;
    this.Router.navigate(['/']);
  }
  ngOnInit() {

    if (sessionStorage.getItem("username") !== null) {

      this.isLogin = true;
      this.username = sessionStorage.getItem("username")
      this.maLoaiNguoiDung = sessionStorage.getItem("maLoaiNguoiDung")
    }

  }

}
