// Exercise 4
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

const converter = (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};

console.log(converter(foodPairings));
