import { Component, OnInit } from '@angular/core';
import { NavService } from './commons/services/utils/nav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private nav : NavService
  ) { }
}
