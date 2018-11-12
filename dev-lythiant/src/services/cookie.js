/* eslint-disable */
module.exports = {
  getCookie(name) {
    const value = `; ${document.cookie}`;
    const cookie = value.split(`; ${name}=`);
    if (cookie.length === 2) {
    	 return cookie.pop().split(';').shift();
    }
  },
  setCookie(name, value) {
	  document.cookie = `${name}=${value}; Path=/;`;
  },
  deleteCookie(name) {
	  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  },
};
