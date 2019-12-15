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
  constructor(private AdminService: AdminService,
  ) { }
  p: number = 1;
  error: any;
  user: any = {
    "taiKhoan": "nguyen0987a",
    "matKhau": "123456789",
    "email": "abca@abc.com",
    "soDt": "12345678",
    "maNhom": "GP01",
    "maLoaiNguoiDung": "KhachHang",
    "hoTen": "Nguyen"
  };
  taiKhoanDetele: any = '';
  deletedUser: boolean = false;
  searchText;
  addUser: boolean = false;
  addUsersuccess: boolean = null;
  return: boolean = false;
  deleteUsersuccess: boolean = true;

  listDeteleUser: any = [];

  clicked = (item) => {

  }

  resetForm = () => {
    this.addUser = false;

  }

  signup = (user) => {

    user.maNhom = 'GP01'
    console.log(user);
    this.addUser = true;
    this.AdminService.ThemNguoiDung(user).subscribe((result) => {
      console.log(result);

      this.addUsersuccess = true;
      this.return = true;
      this.subDanhUsers = this.AdminService.LayDanhSachNguoiDung().subscribe((result) => {
        this.listUsers = result;
       
  
  
      })

    }
      , err => {

        this.addUsersuccess = false;
        this.return = true;
        this.error = err._body;
        console.log(this.error);
      });
  }

  confirmDeteleUser = (item) => {
    this.taiKhoanDetele = item;
    console.log(this.taiKhoanDetele)
    this.deletedUser = false;
  }

  deleteUser = () => {
    console.log(this.taiKhoanDetele);
    this.deletedUser = true;
    this.AdminService.XoaNguoiDung(this.taiKhoanDetele).subscribe((result) => {
      console.log(result);
      this.deleteUsersuccess = true;
      this.subDanhUsers = this.AdminService.LayDanhSachNguoiDung().subscribe((result) => {
        this.listUsers = result;


      })


    }
      , err => {
        this.deleteUsersuccess = true;

        this.subDanhUsers = this.AdminService.LayDanhSachNguoiDung().subscribe((result) => {
          this.listUsers = result;


        })

      });


  }
  ngOnInit() {

    this.subDanhUsers = this.AdminService.LayDanhSachNguoiDung().subscribe((result) => {
      this.listUsers = result;
      console.log(this.listUsers)


    })
  }

}
