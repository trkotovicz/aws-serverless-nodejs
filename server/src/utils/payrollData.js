const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const readCSV = () => {
  return new Promise((resolve, reject) => {
    const data = [];

    fs.createReadStream(path.join(__dirname, 'Folha_de_Pagamento.csv'))
      .pipe(csv())
      .on('data', (item) => data.push(item))
      .on('end', () => resolve(data))
      .on('error', (error) => reject(error));
  });
};

module.exports = readCSV();
