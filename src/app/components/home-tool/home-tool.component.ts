import { map } from 'rxjs/operators';
import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-home-tool',
  templateUrl: './home-tool.component.html',
  styleUrls: ['./home-tool.component.scss']
})
export class HomeToolComponent implements OnInit {
  private subDanhSachPhim = new Subscription();
  private subChiTietPhim = new Subscription();
  public DanhSachPhim: Array<any> = [];
  public phim: any = "";
  public ngayChieuGioChieu: any = [];
  public ngayChieu: any = ["Vui lòng chọn ngày chiếu"];
  public GioChieu: any = ["Vui lòng chọn ngày chiếu"];

  public cumRap: any = ["Vui lòng chọn Phim"];
  public xuatChieu: any = ["Vui lòng chọn ngày chiếu"];
  constructor(private PhimService: PhimService) { }

  getPhim = (id) => {

  
    this.subChiTietPhim = this.PhimService.LayChiTietPhim(id).subscribe((result) => {

      this.phim = result;



      this.cumRap[0] = (result.lichChieu[0].thongTinRap.tenCumRap);



      for (let i = 1; i < result.lichChieu.length; i++) {
        if (result.lichChieu[i].thongTinRap.tenCumRap != result.lichChieu[i - 1].thongTinRap.tenCumRap) {
          this.cumRap.push(result.lichChieu[i].thongTinRap.tenCumRap)

        }
      }

      console.log(this.phim)





    }),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      };

  }

  getCumRap = (cumRap) => {
    var ngayChieuGioChieu: any = [];
    for (var i = 1; i < this.phim.lichChieu.length; i++) {
      if (this.phim.lichChieu[i].thongTinRap.tenCumRap === cumRap) {
        ngayChieuGioChieu.push(this.phim.lichChieu[i].ngayChieuGioChieu)

      }
    }
    this.ngayChieuGioChieu = ngayChieuGioChieu

    var ngayChieu: any = [];
    var listNgayChieu: any = [];
    ngayChieuGioChieu.map((item) => {
      ngayChieu.push(item.slice(0, 10))
    })
    for (let i = 1; i < ngayChieu.length; i++) {
      if (ngayChieu[i] != ngayChieu[i - 1]) {
        listNgayChieu.push(ngayChieu[i])

      }
    }

    this.ngayChieu = listNgayChieu
  }

  getGioChieu = (ngayChieu) => {
    var gioChieu: any = [];
    this.ngayChieuGioChieu.map((item) => {
      if (item.slice(0, 10) === ngayChieu) {
        gioChieu.push(item.slice(11))
      }
    })
    this.GioChieu = gioChieu
  }
  datVe = (data) => {
    alert("Chuyển tới trang chọn ghế")
  }
  ngOnInit() {
    this.subDanhSachPhim = this.PhimService.LayDanhSachPhim().subscribe((result) => {

      this.DanhSachPhim = result;

    }),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      };
  }

}
