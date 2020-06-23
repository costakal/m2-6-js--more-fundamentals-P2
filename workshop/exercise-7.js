// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

function createRecommendations(obj) {
  const allKeys = Object.keys(obj);
  const newArr = allKeys.map(function (key) {
    return `With ${key} it is best to have ${obj[key]}.`;
  });
  return newArr;
}
function printRecommendations(arr) {
  arr.forEach(function (string) {
    console.log(`- ${string}`);
  });
}
printRecommendations(createRecommendations(foodPairings));
