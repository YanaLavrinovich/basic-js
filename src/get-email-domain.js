const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email != "string") {
    return "";
  }

  const emailStr = String(email);
  if (!emailStr.includes("@")) {
    return "";
  }

  return emailStr.substring(emailStr.lastIndexOf("@") + 1);
}

module.exports = {
  getEmailDomain,
};
