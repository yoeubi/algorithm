// https://leetcode.com/problems/unique-email-addresses/
var numUniqueEmails = function(emails) {
  const emailList = emails.map(email => {
    let result = "";
    const [name, domain] = email.split("@");
    for (const char of name) {
      if (char === "+") {
        break;
      }
      if (char !== ".") {
        result += char;
      }
    }
    return result + "@" + domain;
  });
  return Object.keys(
    emailList.reduce((prev, item) => {
      prev[item] = 1;
      return prev;
    }, {})
  ).length;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
);
