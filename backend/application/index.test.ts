//index.test.ts
const index = require("./src/index.ts");

test("DDD From: 011; DD To: 016; Time: 20; Plan: TalkMore 30", () => {
  const result = index.simulate("011", "016", 20, "basic");
  expect(result).toEqual({
    with_telzir: 0.0,
    without_telzir: 38.0,
    economy: 100,
  });
});
