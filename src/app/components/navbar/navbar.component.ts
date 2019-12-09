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

  ngOnInit() {
    
      if (sessionStorage.getItem("username" ) !== null) {
      
        this.isLogin=true;
        this.username=sessionStorage.getItem("username")
      }

  }

}
