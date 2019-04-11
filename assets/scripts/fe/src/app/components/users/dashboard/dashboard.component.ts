import { Component, OnInit, HostListener } from '@angular/core';

import { StateService } from '@uirouter/angular';
import { NavService } from '../../../commons/services/utils/nav.service';
import { FeedService } from '../../../commons/services/utils/feed.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private nav      : NavService,
    private feed     : FeedService,
    private state    : StateService
  ) {
    // nav configuration
    // TODO: this sucks!. find a better solution
    this.nav.setNav('Dashboard');
  }

  ngOnInit() {
    // reload the feed item list except on
    // dashboard-report.
    if (!this.feed.noreload && this.state.$current.name !== 'dashboard-report') {
      this.feed.getFeed();
    } else {
      this.feed.noreload = false;
    }
  }

  @HostListener('scroll', ['$event']) 
  scrollfeed(event): void {
    // captures the scroll event on the feed-section.
    // it handles the call to the backend when the scroll
    // reach its max height.
    let cHeight = event.target.scrollHeight;
    let scrollHeight = event.target.scrollTop;

    // offset height. this is the sum of the margin/interval
    // of each element inside the `cHeight`. can change based
    // on the design template.
    // margin-height: 708, spacing-height: 100 # spacer so that this
    // sends a call to the backend before the user reach the last item.
    let maxHeight = cHeight - (708 + 100);

    if(scrollHeight >= maxHeight) {
      this.feed.loadMoreFeed();
    }
  }

}
