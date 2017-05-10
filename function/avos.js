var myString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

function howManyDeals(data) {
  numberOfDeal = data.split(', ');
  console.log(numberOfDeal);
  console.log('*****************');
  return numberOfDeal;
}

function arrayOfObject(splittedString) {

  var objArr = [];

  for (var i = 0; i < splittedString.length; i++) {
    myArr = splittedString[i].split('for ');
    objArr.push({ qty : myArr[0],
                  price: myArr[1]
                })
  }

  console.log(objArr);
  console.log('*****************');
  return objArr;
}
arrayOfObject(howManyDeals(myString));
