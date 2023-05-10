var chocolateGiven = Number(
  prompt("How many chocolates do you want? ex. 0-10")
);
var chocolateLeft = 10 - chocolateGiven;

if (chocolateLeft <= 4) {
  alert(`There are only ${chocolateLeft} chocolates left!`);
}
