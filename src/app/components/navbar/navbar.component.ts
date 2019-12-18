import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  isLogin: boolean = false;
  username: any = '';
  maLoaiNguoiDung: any = ''

  logout = () => {
    alert("Bạn muốn đăng xuất? ")
    // sessionStorage.removeItem("username");
    sessionStorage.clear();
    this.isLogin = false;
    this.router.navigate(['']);
  }


  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  ngOnInit() {

    if (sessionStorage.getItem("username") !== null) {

      this.isLogin = true;
      // this.username = sessionStorage.getItem("username").slice(0, 1).toUpperCase()
      this.username = sessionStorage.getItem("username")

      this.maLoaiNguoiDung = sessionStorage.getItem("maLoaiNguoiDung")
    }

  }

}
