import { Component, OnInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
@Component({
  selector: 'app-home-templates',
  templateUrl: './home-templates.component.html',
  styleUrls: ['./home-templates.component.scss']
})
export class HomeTemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Scrollbar.initAll();
  }


}
