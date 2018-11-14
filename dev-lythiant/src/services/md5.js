const md5 = require("md5");

module.exports = {
  convertMD5(input) {
    return md5(input);
  }
};
