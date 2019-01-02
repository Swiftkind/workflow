import { ContentOnly, NavContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';


export const USER_STATES : Object[] = [
  {
    name    : 'dashboard',
    url     : '/dashboard/',
    views   : NavContent(DashboardComponent),
    onEnter : LoginRequired
  },
  {
    name    : 'user-settings',
    url     : '/users/settings/',
    views   : NavContent(SettingComponent),
    onEnter : LoginRequired
  }
]