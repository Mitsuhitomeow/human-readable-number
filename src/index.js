module.exports = function toReadable (number) {

  const thirdNum = Math.floor(number / 100);

  let secondNum = Math.floor((number - thirdNum * 100)/10);
  
  let firstNum = number - (thirdNum * 100) - (secondNum * 10);

  const arrBeforeTwenty = [ '', 
                            'one', 
                            'two', 
                            'three', 
                            'four', 
                            'five', 
                            'six', 
                            'seven', 
                            'eight', 
                            'nine', 
                            'ten', 
                            'eleven', 
                            'twelve', 
                            'thirteen', 
                            'fourteen', 
                            'fifteen', 
                            'sixteen', 
                            'seventeen', 
                            'eighteen', 
                            'nineteen'
                          ];
  const arrTens = [ '',
                    '',
                    'twenty ',
                    'thirty ', 
                    'forty ', 
                    'fifty ', 
                    'sixty ', 
                    'seventy ', 
                    'eighty ', 
                    'ninety '
                  ];

  if (number === 0) {
      return 'zero';
  }

  if( secondNum === 1) {
      secondNum = 0;
      firstNum = number - thirdNum * 100;
  }

  const numPlusHundred = thirdNum ? arrBeforeTwenty[thirdNum] + ' hundred ' : '';

  return ( numPlusHundred + arrTens[secondNum] + arrBeforeTwenty[firstNum]).trim();

}
