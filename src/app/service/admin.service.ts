import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  readonly api: any = {
    LayDanhSachNguoiDung: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"

  }

  constructor(private http: Http) { }


  LayDanhSachNguoiDung(): Observable<any> {
    let observable = this.http.get(this.api.LayDanhSachNguoiDung).pipe(map((res: Response) => res.json()));
    return observable;
  }



}


