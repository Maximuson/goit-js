function solution(number) {
  const numbers = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  let curentNumber = number;
  const arabNumbers = Object.keys(numbers);
  let result = '';
  function findBiggestNumber(number) {
    let result = 0;
    arabNumbers.forEach((e) => {
      if (e <= number) { result = e; }
    });
    return +result;
  }

  while (curentNumber > 0) {
    const numberMinus = findBiggestNumber(curentNumber);
    result += numbers[numberMinus];
    curentNumber -= numberMinus;
  }
  return result;
}

//better

// function solution(number){
//     // convert the number to a roman numeral
//   var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
//   var ans = '';
//   while(number>0){
//       for(a in roman){ 
//           if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
//       }
//   }
//   return ans;
//   }
