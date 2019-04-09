import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {}

}
