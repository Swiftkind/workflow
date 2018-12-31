import { ContentOnly, NavContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { PayrollComponent } from './payroll/payroll.component';


export const PAYROLL_STATES : Object[] = [
  {
    name    : 'payroll',
    url     : '/payroll/:id/',
    views   : NavContent(PayrollComponent),
    onEnter : LoginRequired
  }
]