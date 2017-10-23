import * as Cookies from 'js-cookie';
import * as unescape from 'unescape';

export default (): typeof User => {
  return Cookies.getJSON('current_user');
}
