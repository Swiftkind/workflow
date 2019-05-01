import { ContentOnly, NavContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


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
  }
]