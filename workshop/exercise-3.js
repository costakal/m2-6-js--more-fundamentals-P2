// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];

const sortList = (arr) => {
  let alphOrder = [...arr].sort();
  alphOrder.map((currentItem, index) => {
    console.log(`${currentItem} (${arr.indexOf(currentItem) + 1})`);
  });
};
sortList(mostPopularFood);
