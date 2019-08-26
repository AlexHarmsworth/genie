const { Random, MersenneTwister19937 } = require("random-js");
const config = {
  odds: 15339390,
  min: 1,
  max: 47,
  length: 5
};

function generateInt() {
  let gens = [];
  for (let index = 1; index !== config.odds + 1; index++) {
    const random = new Random(MersenneTwister19937.autoSeed());
    gens.push(random.real(config.min, config.max));
  }
  return gens;
}

function predict() {
  return parseInt(generateInt().reduce((a, c) => a + c) / config.odds);
}

const prediction = new Set();

while (prediction.size !== config.length) {
  prediction.add(predict());
}

console.log(`Prediction:`, Array.from(prediction).sort());
