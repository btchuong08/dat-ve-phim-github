import { PhimComponent } from './phim/phim.component';
import { PhimService } from './../../service/phim.service';

import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  private subDanhSachPhim = new Subscription();
  public safeTrailerURL: any = "";
  public DanhSachPhim: Array<any> = [];
  public DanhSachPhimChunk: Array<any> = [];

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
  trailer(phim: any) {
    this.safeTrailerURL = phim.trailer;

  }
  constructor(private PhimService: PhimService,
    private sanitizer: DomSanitizer) { }

  functionchunkArray(myArray, chunk_size) {
    var results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  }

  ngOnInit() {
    this.subDanhSachPhim = this.PhimService.LayDanhSachPhim().subscribe((result) => {

      this.DanhSachPhim = result;
      this.PhimService.DanhSachPhim = this.DanhSachPhim

      this.DanhSachPhimChunk = this.functionchunkArray(this.DanhSachPhim, 8)
      this.DanhSachPhimChunk[0].active = "active"
      for (var i = 1; i < this.DanhSachPhimChunk.length; i++) {
        this.DanhSachPhimChunk[i].active = ""
      }

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
