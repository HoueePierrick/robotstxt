// Package used to parse robots.txt file of websites
import robotsParser from "robots-parser";

var robots = robotsParser(
  // URL of the file to be parsed - the path is important as following rules are relative to current position of robots.txt
  "http://www.example.com/robots.txt",
  // File content - to be gotten
  [
    "User-agent: *",
    // Allowing or disallowing access to certain directories inside the website
    "Disallow: /dir/",
    // Disallowing any path ending with test.html
    "Disallow: /test.html",
    "Allow: /dir/test.html",
    "Allow: /test.html",
    "Crawl-delay: 1",
    // May have the list of different URLs than can be visited (not always present)
    "Sitemap: http://www.example.com/sitemap.xml",
    "Host: example.com",
  ].join("\n")
);

// console.log(
robots.isAllowed("http://www.example.com/test.html", "Sans-Bot/1.0");
// ); // true
robots.isAllowed("http://www.example.com/dir/test.html", "Sans-Bot/1.0"); // true
robots.isDisallowed("http://www.example.com/dir/test2.html", "Sans-Bot/1.0"); // true
robots.getCrawlDelay("Sans-Bot/1.0"); // 1
robots.getSitemaps(); // ["http://www.example.com/sitemap.xml"]
// robots.getPreferredHost(); // example.com
