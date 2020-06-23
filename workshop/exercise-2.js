// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuestOrder = (early, late) => {
  let log = early.concat(late);
  for (i = 0; i < log.length; i++) {
    console.log(`${i + 1}. ${log[i]}`);
  }
};

printGuestOrder(earlyBirds, lateComers);
