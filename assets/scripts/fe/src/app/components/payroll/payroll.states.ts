import { ContentOnly, NavContent } from '../../commons/utils/layout.utils';
import { LoginRequired, PayrollRedirect } from '../../commons/utils/security.utils';

import { PayrollComponent } from './payroll/payroll.component';


export const PAYROLL_STATES : Object[] = [
  {
    name    : 'payroll',
    url     : '/payroll/',
    views   : NavContent(PayrollComponent),
    onEnter : PayrollRedirect
  },
  {
    name    : 'payroll-detail',
    url     : '/payroll/:id/',
    views   : NavContent(PayrollComponent),
    onEnter : LoginRequired
  }
]