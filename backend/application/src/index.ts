// require basic scripts
const { queryData } = require("./scripts/syncDb");
const { listen } = require("./scripts/listen");

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

listen.post("/simulate", jsonParser, async function (req: any, res: any) {
  let { ddd_from, ddd_to, call_time, choose_plan } = req.body;

  let response = await simulate(ddd_from, ddd_to, call_time, choose_plan);

  // response
  res.send(response);
});

const simulate = async (
  ddd_from: string,
  ddd_to: string,
  call_time: number,
  choose_plan: string
) => {
  // get the minutes of the plan price and the price
  let minutes = await getMinutes(choose_plan);
  let price = await getPrice(ddd_from, ddd_to);

  // compare price with and without the telzir discount
  let with_telzir = getPlanWithTelzir(call_time, minutes, price);
  let without_telzir = getPlanWithoutTelzir(call_time, price);

  // get the economy
  let economy = getEconomy(with_telzir, without_telzir);

  // create the response
  return {
    with_telzir,
    without_telzir,
    economy,
  };
};

// query to get the price of the call
const getPrice = async (ddd_from: string, ddd_to: string) => {
  let { price } = await queryData(
    `SELECT price FROM falemais WHERE ddd_from = ? AND ddd_to = ?`,
    [ddd_from, ddd_to]
  );

  return price;
};

// query to get the minutes for free of the plan
const getMinutes = async (choose_plan: string) => {
  let { minutes } = await queryData(
    `SELECT minutes FROM plans WHERE plan = ?`,
    [choose_plan]
  );

  return minutes;
};

// get plan with telzir
const getPlanWithTelzir = (
  call_time: number,
  plan_minutes: number,
  price: number
) => {
  if (!price) return "-";

  // default tariff, if user uses more than the plan minutes
  const tariff = 10;

  let minutes = call_time - plan_minutes;

  // if the minutes are less than 0, then not all the minutes are used
  if (minutes < 0) {
    return 0;
  }

  // calculate the price of the minutes with the tariff
  let price_with_tariff = price + price / tariff;
  let price_with_minutes = price_with_tariff * minutes;

  return price_with_minutes;
};

// simple function to get the plan without telzir
const getPlanWithoutTelzir = (call_time: number, price: number) => {
  if (!price) return "-";

  return price * call_time;
};

// get economy that is the difference between the two prices
const getEconomy = (with_telzir: any, without_telzir: any) => {
  if (with_telzir === "-" || without_telzir === "-") return "-";

  let percentage = (with_telzir * 100) / without_telzir;

  // calculate the percentege of economy
  let economy = 100 - percentage;

  return economy;
};
