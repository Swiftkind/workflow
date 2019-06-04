import { Component, OnInit, HostListener } from '@angular/core';
import { StandupService } from '../../../commons/services/history/standup.service'
import { NavService } from '../../../commons/services/utils/nav.service';
import { ProjectService } from '../../../commons/services/project/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private standupservice : StandupService,
    private nav            : NavService,
    private projectservice : ProjectService
  ) 
  { 
    this.nav.setNav('Projects', true);
  }

  ngOnInit() {
    if(this.standupservice.userReportList.length < 1){
      // get all the reports of user
      this.standupservice.revertWeeklyReport()
      this.standupservice.getReportList()
      this.projectservice.getProjects()
    }
  }

  @HostListener('scroll', ['$event']) 
  scrollReport(event): void {
    // captures the scroll event on the WeeklyReport-section.
    // it handles the call to the backend when the scroll
    // reach its max height.
    let cHeight = event.target.scrollHeight;
    let sHeight = event.target.scrollTop;
    //this.standupservice.scrollHeight = event.target.scrollTop;

    // offset height. this is the sum of the margin/interval
    // of each element inside the `cHeight`. can change based
    // on the design template.
    // margin-height: 581, spacing-height: 100 # spacer so that this
    // sends a call to the backend before the user reach the last item.
    let maxHeight = cHeight - (881 + 100);

    if(sHeight >= maxHeight) {
      // load more report once target height is reached
      this.standupservice.loadMoreWeeklyReport()
    }
  }
}
