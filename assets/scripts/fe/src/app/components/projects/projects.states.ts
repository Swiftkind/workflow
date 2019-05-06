import { ContentOnly, NavContent, NavSideOpenContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { SideReportComponent } from '../users/dashboard/side-report/side-report.component';


export const PROJECTS_STATES : Object[] = [
  {
    name    : 'projects',
    url     : '/projects/',
    views   : NavContent(ProjectsComponent),
    onEnter : LoginRequired
  },
  {
    name    : 'project-detail',
    url     : '/project/:id/',
    views   : NavContent(ProjectDetailComponent),
    onEnter : LoginRequired
  },
  {
    name    : 'project-detail-report',
    url     : '/project/:id/report/card/:cardId',
    views   : NavSideOpenContent(SideReportComponent, ProjectDetailComponent),
    onEnter : LoginRequired
  },
]