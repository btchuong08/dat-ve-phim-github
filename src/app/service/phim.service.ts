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
    LayChiTietPhim: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=",
    LayThongTinLichChieuHeThongRap: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap="
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
  public heThongRap: Array<any> = [
    {
      "maHeThongRap": "CineStar",
      "tenHeThongRap": "CineStar",
      "biDanh": "cinestar",
      "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png"
    },
   
    {
      "maHeThongRap": "Galaxy",
      "tenHeThongRap": "Galaxy Cinema",
      "biDanh": "galaxy-cinema",
      "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png"
    },
    {
      "maHeThongRap": "BHDStar",
      "tenHeThongRap": "BHD Star Cineplex",
      "biDanh": "bhd-star-cineplex",
      "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
    },
    
    {
      "maHeThongRap": "LotteCinima",
      "tenHeThongRap": "Lotte Cinema",
      "biDanh": "lotte-cinema",
      "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png"
    },
    {
      "maHeThongRap": "CGV",
      "tenHeThongRap": "cgv",
      "biDanh": "cgv",
      "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"
    }
  ];

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

  LayThongTinLichChieuHeThongRap = (maHeThongRap) => {
    let observable = this.http.get(this.api.LayThongTinLichChieuHeThongRap + maHeThongRap + "&maNhom=GP01").pipe(map((res: Response) => res.json()));
    return observable;
  }
}
