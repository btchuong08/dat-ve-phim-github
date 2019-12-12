import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-quan-ly-user',
  templateUrl: './quan-ly-user.component.html',
  styleUrls: ['./quan-ly-user.component.scss']
})
export class QuanLyUserComponent implements OnInit {
  private subDanhUsers = new Subscription();
  listUsers: any = [];
  constructor(private AdminService: AdminService) { }
  p: number = 1;


  title = 'Angular Search Using ng2-search-filter';
  searchText;

  listDeteleUser: any = [];

  clicked = (item) => {

  }

  signup = (user) => {
    console.log(user)
  }
  ngOnInit() {



    this.subDanhUsers = this.AdminService.LayDanhSachNguoiDung().subscribe((result) => {
      this.listUsers = result;
      console.log(result)

    })
  }

}
