import { ContentOnly, NavContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { ProjectsComponent } from './projects/projects.component';


export const PROJECTS_STATES : Object[] = [
  {
    name    : 'projects',
    url     : '/projects/',
    views   : NavContent(ProjectsComponent),
    onEnter : LoginRequired
  }
]