import { ContentOnly, NavContent, NavSideOpenContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { SideReportComponent } from '../users/dashboard/side-report/side-report.component';


export const PROJECTS_STATES : Object[] = [
  {
    name    : 'projects',
    url     : '/projects/',
    views   : NavContent(ProjectsComponent),
    onEnter : LoginRequired
  },
  {
    name    : 'project-details',
    url     : '/project/:id/',
    views   : NavContent(ProjectDetailsComponent),
    onEnter : LoginRequired
  },
  {
    name    : 'project-details-report',
    url     : '/project/:id/report/card/:cardId',
    views   : NavSideOpenContent(SideReportComponent, ProjectDetailsComponent),
    onEnter : LoginRequired
  },
]