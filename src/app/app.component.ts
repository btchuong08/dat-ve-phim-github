import { Component } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datvephim';


  ngOnInit() {

    Scrollbar.initAll();
 

  }
}
