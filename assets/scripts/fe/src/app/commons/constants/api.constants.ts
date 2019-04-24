import { urlsafe } from '../utils/http.utils';

/* USERS ENDPOINTS
 */

export const USERS = '/api/users/';

/* AUTH ENDPOINTS
 */
export const AUTH_USER = urlsafe(USERS, 'auth');
export const CHANGE_PASSWORD = urlsafe(AUTH_USER, 'password');
export const AUTH_LOGIN = urlsafe(AUTH_USER, 'login');
export const SERVER_STATUS = urlsafe(AUTH_USER, 'server');


/* SLACK AUTH ENDPOINTS
 */
export const SLACKAUTH = urlsafe(AUTH_USER, 'slack');
export const SLACKAUTH_CONFIG = urlsafe(SLACKAUTH, 'config');
export const SLACKAUTH_USER_TOKEN = urlsafe(SLACKAUTH, 'token');


/* PAYROLL ENDPOINTS
 */

export const PAYROLL = '/api/payroll/';


// This isn't by definition a "constant" url since the id changes, but this will let us
//   put all the api/endpoints in one place.
export const PAYROLL_REPORT = (id: any) => {return urlsafe(PAYROLL, id, 'report')} 


/* FEED ENDPOINTS
 */

export const FEED = '/api/feed/';

export const FEED_NOTIFICATIONS = urlsafe(FEED, 'notifications');
export const FEED_NOTIFICATIONS_EVENTS = urlsafe(FEED_NOTIFICATIONS, 'events');
export const FEED_NOTIFICATIONS_PENDING = urlsafe(FEED_NOTIFICATIONS, 'pending');

/* HISTORY ENDPOINTS
 */

export const HISTORY = '/api/history/';

export const HISTORY_STANDUP = urlsafe(HISTORY, 'standup');