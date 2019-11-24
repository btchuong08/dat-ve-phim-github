import { PhimService } from './../../service/phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {
  private subDanhSachPhim = new Subscription();
  public ListCumRap: Array<any> = [];
  public heThongRap = this.PhimService.heThongRap
  public CumRap: Array<any> = [];

  public DanhSachPhim: Array<any> = [];
  constructor(private PhimService: PhimService) { };
  LayThongTinLichChieuHeThongRap = (heThongRap) => {

    heThongRap.map((item) => {

      this.PhimService.LayThongTinLichChieuHeThongRap(item.maHeThongRap).subscribe((result) => {
        this.ListCumRap.push(result)

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
    })

  }

  getCumRap = (item) => {
    this.CumRap = item[0].lstCumRap;
    console.log(this.CumRap)

  }

  ngOnInit() {

    this.LayThongTinLichChieuHeThongRap(this.heThongRap);
    console.log(this.ListCumRap)
  }
}