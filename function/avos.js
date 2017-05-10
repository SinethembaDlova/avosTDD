var myString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";

function howManyDeals(data) {
  numberOfDeal = data.split(', ');
  console.log(numberOfDeal);
  return numberOfDeal;
}

howManyDeals(myString);


function arrayOfObject(splittedString) {

  for (var i = 0; i < splittedString.length; i++) {

  myArr = splittedString.split('for');
  }
}
