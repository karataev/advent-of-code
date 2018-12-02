const data = require('./day1-data');

function getResultFrequency(data) {
  let result = 0;
  data.split('\n')
    .forEach(item => {
      const sign = item[0];
      const value = +item.slice(1);
      if (sign === '+') result += value;
      if (sign === '-') result -= value;
    });

  console.log(result);
}

function findRepeatedFrequency(data) {
  let totalValue = 0;
  let table = {};
  let dataArr = data.split('\n');
  while (true) {
    for (let i = 0; i < dataArr.length; i++) {
      let item = dataArr[i];
      const sign = item[0];
      const value = +item.slice(1);
      if (sign === '+') totalValue += value;
      if (sign === '-') totalValue -= value;
      if (!table[totalValue]) {
        table[totalValue] = totalValue;
      } else {
        return table[totalValue];
      }
    }
  }
}

console.log(findRepeatedFrequency(data));
