import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../commons/services/utils/nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private nav : NavService
  ) {
    // nav configuration
    // TODO: this sucks!. find a better solution
    this.nav.setNav('Dashboard');
  }

  ngOnInit() {}

}
