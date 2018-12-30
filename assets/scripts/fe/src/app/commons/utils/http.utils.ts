/* Re-format the URL parameters for
 * readbility
 */
export function urlsafe (url, ...params) {
    return url.concat(params.join("/"), '/');
}

export function queryparams (data) {
  return "?" + Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
}