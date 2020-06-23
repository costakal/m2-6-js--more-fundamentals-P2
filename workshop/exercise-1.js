// Exercise 1
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = (arr, first, last) => {
  arr.pop();
  arr.unshift(first);
  arr.push(last);
  return arr;
};

const printList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`);
  }
};

printList(
  fixList(mostPopularFood, "bean burritos", "buffalo-flavored cauliflower")
);
