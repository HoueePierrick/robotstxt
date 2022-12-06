import robotParser from "robots-parser";
import request from "request-promise";

const robotsUrl = "https://textfiles.meulie.net/robots.txt";

async function getRobotsTxt(url: string) {
  const robotTxt = await request.get(url);
  const robots = robotParser(url, robotTxt);
  console.log(
    robots.isAllowed("https://textfiles.meulie.net/100/", "PierrickBot")
  );
  console.log(
    robots.isAllowed("https://textfiles.meulie.net/100/", "rogerbot")
  );
  console.log(robots.getCrawlDelay());
}

getRobotsTxt(robotsUrl);
