import { PhimService } from './../../service/phim.service';

import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {


  private subDanhSachPhim = new Subscription();
  public DanhSachPhim: Array<any> = [];
  constructor(private PhimService: PhimService) { }

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
