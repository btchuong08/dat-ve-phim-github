import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
@Input() phim;
  constructor() { }

  ngOnInit() {
  }

}
