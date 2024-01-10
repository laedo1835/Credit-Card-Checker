// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//==============================================================

// Add 1st functions below:
function validCred(numberArr) { //
  let total = 0; //

  for (let i = numberArr.length - 1; i >= 0; i--) { //I thought the nested for loop would iterate trough the CC backwards. Does this loop through batch backwards as well? 
    let currValue = numberArr[i];                   //

    if ( (numberArr.length - 1 - i) % 2 === 1 ){    //
      currValue = currValue * 2; //

      if( currValue > 9 ){ //
        currValue = currValue - 9;//
      }
    }

    total = total + currValue;//
  }

  return total % 10 === 0;//
}
console.log( validCred(valid1) );// Why isn't batch used on the first Function. It's used on the 2nd function instead. 
console.log( validCred(invalid1) );//
//shouldn't we iterate through mystery as well to validate CC's?



// 2nd Function
function findInvalidCards(cards) {//
  let invalid = [];//

  for( let i = 0; i < cards.length; i++) {//
    let currCard = cards[i];//

    if( !validCred(currCard) ){//if this Call Func evaluates to false
      invalid.push(currCard);//assign the result to the cards[i] array in currCard $variable.
    }
  }

  return invalid;//this returns the value of elements in the new array to be ready to be called by a console.log or CallFn.
}
console.log(findInvalidCards(batch));// prints the return of the CallFn from findInvalidCards to the console.


// 3rd Function 
function idInvalidCardCompanies(invalidCards) {//
  let companies = [];//

  for( let i = 0; i < invalidCards.length; i++ ) {//
    let firstDigit = invalidCards[i][0];//

    if( firstDigit === 3 ){
      if( companies.indexOf('Amex') === -1 ) {
        companies.push('Amex');
      }
    } else if( firstDigit === 4 ){
      if( companies.indexOf('Visa') === -1 ) {
        companies.push('Visa');
      }
    } else if( firstDigit === 5 ){
      if( companies.indexOf('MasterCard') === -1 ) {
        companies.push('MasterCard');
      }
    } else if( firstDigit === 6 ){
      if( companies.indexOf('Discover') === -1 ) {
        companies.push('Discover');
      }
    } else {
      console.log('Company not found');
    }
  }

  return companies;
}
console.log(idInvalidCardCompanies([valid1]));
console.log(idInvalidCardCompanies(batch));
