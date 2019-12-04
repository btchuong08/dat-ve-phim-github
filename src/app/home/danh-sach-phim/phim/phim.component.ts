
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  @Input() phim: any;
  @Output() valueChange = new EventEmitter();

  valueChanged() {

    this.valueChange.emit(this.phim);

  }

  constructor() { }

  ngOnInit() {
  }

}
