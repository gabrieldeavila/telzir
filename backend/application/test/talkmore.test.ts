var { simulateAsync } = require("../src/scripts/simulation");

describe("test talk more", () => {
  it("should return {with_telzir: 0, without_telzir: 38, economy: 100} for simulate('011', '016', 20, 'basic')", async () => {
    let result = await simulateAsync("011", "016", 20, "basic");

    expect(result).toStrictEqual({
      with_telzir: 0,
      without_telzir: 38,
      economy: 100,
    });
  });

  it("should return {with_telzir: 37.4, without_telzir: 136, economy: 72.5} for simulate('011', '017', 80, 'premium')", async () => {
    let result = await simulateAsync("011", "017", 80, "premium");

    expect(result).toStrictEqual({
      with_telzir: 37.4,
      without_telzir: 136,
      economy: 72.5,
    });
  });

  it("should return {with_telzir: 167.2, without_telzir: 380, economy: 56} for simulate('018', '011', 200, 'standard')", async () => {
    let result = await simulateAsync("018", "011", 200, "standard");

    expect(result).toStrictEqual({
      with_telzir: 167.2,
      without_telzir: 380,
      economy: 56,
    });
  });

  it("should return {with_telzir: '-', without_telzir: '-', economy: '-'} for simulate('018', '017', 100, 'basic')", async () => {
    let result = await simulateAsync("018", "017", 100, "basic");

    expect(result).toStrictEqual({
      with_telzir: "-",
      without_telzir: "-",
      economy: "-",
    });
  });
});
