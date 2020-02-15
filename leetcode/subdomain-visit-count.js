// https://leetcode.com/problems/subdomain-visit-count/
var subdomainVisits = function(cpdomains) {
  const countDomain = cpdomains.reduce((prev, item) => {
    const [count, domain] = item.split(" ");
    let parseCount = Number(count);
    let subList = domain.split(".");
    for (let i = 0; i < subList.length; i++) {
      const sub = subList.slice(i).join(".");
      if (prev[sub]) {
        prev[sub] += parseCount;
      } else {
        prev[sub] = parseCount;
      }
    }
    return prev;
  }, {});
  return Object.keys(countDomain).map(
    domain => `${countDomain[domain]} ${domain}`
  );
};

console.log(
  subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org"
  ])
);
