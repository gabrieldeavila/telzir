// require basic scripts
const { listen } = require("./scripts/listen");

var { simulateAsync } = require("./scripts/simulation");

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

listen.post("/simulate", jsonParser, async function (req: any, res: any) {
  let { ddd_from, ddd_to, call_time, choose_plan } = req.body;

  // get the simulation
  let response = await simulateAsync(ddd_from, ddd_to, call_time, choose_plan);

  // response
  res.send(response);
});
