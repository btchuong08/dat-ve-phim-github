import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isLogin: boolean = false;
  username: any = '';
  maLoaiNguoiDung: any = ''

  logout = () => {
    alert("Bạn muốn đăng xuất? ")
    // sessionStorage.removeItem("username");
    sessionStorage.clear();
    this.isLogin = false;
  }
  ngOnInit() {

    if (sessionStorage.getItem("username") !== null) {

      this.isLogin = true;
      this.username = sessionStorage.getItem("username").slice(0,1).toUpperCase()
  
      this.maLoaiNguoiDung = sessionStorage.getItem("maLoaiNguoiDung")
    }

  }

}
