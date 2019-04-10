import { ContentOnly, NavContent, NavSideOpenContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideReportComponent } from './dashboard/side-report/side-report.component';
import { SettingComponent } from './setting/setting.component';


export const USER_STATES : Object[] = [
  {
    name    : 'dashboard',
    url     : '/dashboard/',
    views   : NavContent(DashboardComponent),
    onEnter : LoginRequired
  },
  {
    name    : 'dashboard-report',
    url     : '/dashboard/report/:id/',
    views   : NavSideOpenContent(SideReportComponent, DashboardComponent),
    onEnter : LoginRequired
  },
  {
    name    : 'user-settings',
    url     : '/users/settings/',
    views   : NavContent(SettingComponent),
    onEnter : LoginRequired
  }
]