import { ContentOnly } from '../../commons/utils/layout.utils';
import { Disconnect, SlackAuthRedirect } from '../../commons/utils/security.utils';

import { LoginComponent } from './login/login.component';


export const PUBLIC_STATES : Object[] = [
    {
      name  : 'login',
      url   : '/login/',
      views : ContentOnly(LoginComponent)
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