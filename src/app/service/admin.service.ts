import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  readonly api: any = {
    LayDanhSachNguoiDung: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    ThemNguoiDung: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
    XoaNguoiDung: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=',
    DangKy: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
    ThongTinTaiKhoan: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
    CapNhatThongTinNguoiDung: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
    DatVe: 'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe'
  }

  constructor(private http: Http) { }


  LayDanhSachNguoiDung(): Observable<any> {
    let observable = this.http.get(this.api.LayDanhSachNguoiDung).pipe(map((res: Response) => res.json()));
    return observable;
  }

  ThemNguoiDung = (user) => {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
      'Accept': '*/*'
    });
    const options = new RequestOptions({ headers: headers });
    let observable = this.http.post(this.api.ThemNguoiDung, user, options).pipe(map((res: Response) => res.json()));
    return observable;
  }

  XoaNguoiDung = (TaiKhoan) => {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
      'Accept': '*/*'
    });
    const options = new RequestOptions({ headers: headers });
    let observable = this.http.delete(this.api.XoaNguoiDung + TaiKhoan, options).pipe(map((res: Response) => res.json()));
    return observable;
  }

  DangKy = (user) => {
    let observable = this.http.post(this.api.DangKy, user).pipe(map((res: Response) => res.json()));
    return observable;
  }

  ThongTinTaiKhoan = (taiKhoan) => {
    let observable = this.http.post(this.api.ThongTinTaiKhoan, {
      "taiKhoan": taiKhoan
    }).pipe(map((res: Response) => res.json()));
    return observable;
  }

  CapNhatThongTinNguoiDung = (user) => {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
      'Accept': '*/*'
    });
    const options = new RequestOptions({ headers: headers });
    let observable = this.http.put(this.api.CapNhatThongTinNguoiDung, user, options).pipe(map((res: Response) => res.json()));
    return observable;
  }

  DatVe = (ve) => {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
      'Accept': '*/*'
    });
    const options = new RequestOptions({ headers: headers });
    let observable = this.http.post(this.api.DatVe, ve, options).pipe(map((res: Response) => res.json()));
    return observable;
  }


}


