import { ContentOnly } from '../../commons/utils/layout.utils';
import { Disconnect, SlackAuthRedirect } from '../../commons/utils/security.utils';
import { Injector } from '@angular/core';

import { LoginComponent } from './login/login.component';

export const PUBLIC_STATES : Object[] = [
    {
      name  : 'login',
      url   : '/login/?:next', // Optional parameter for setting redirect value
      views : ContentOnly(LoginComponent),
      params: { next: null } // Set initial value for parameter
    },
    {
      name    : 'logout',
      url     : '/logout/',
      onEnter : Disconnect
    },
    {
      name    : 'slackauthredirect',
      url     : '/auth/slack/redirect/:token/',
      onEnter : SlackAuthRedirect
    }
]