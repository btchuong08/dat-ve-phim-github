import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  public DanhSachPhim: Array<any> = [];

  readonly api: any = {
    LayDanhSachKhoaHoc: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    getToken: "https://nvs-cpaas-oauth.kandy.io/auth/realms/att/protocol/openid-connect/token",
    LayDanhSachPhim: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    LayChiTietPhim: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim="
  }


  readonly apiBody: any = {
    user: {
      grant_type: "password",
      client_id: "cpaasportal",
      username: "staas-admin@mnoc.att.com",
      password: "STaaS-1234",
      scope: "openid"
    }
  }


  constructor(private http: Http) {


  }

  LayDanhSachPhim(): Observable<any> {
    let observable = this.http.get(this.api.LayDanhSachPhim).pipe(map((res: Response) => res.json()));
    return observable;
  }

  LayChiTietPhim(id: string): Observable<any> {
    let observable = this.http.get(this.api.LayChiTietPhim + id).pipe(map((res: Response) => res.json()));
    return observable;
  }
  layDanhSachPhimAPI = () => {
    let DanhSachPhim = this.http.get(this.api.LayDanhSachPhim).pipe(map((res: Response) => res.json())).subscribe((result) => {

      this.DanhSachPhim = result;

    })

    return DanhSachPhim
  }
}
