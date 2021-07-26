const fs = require('fs')
const { convertArrayToCSV: arrayToCSV } = require('convert-array-to-csv');
const db = require('./db');

db.any("SELECT * FROM public.customer ORDER BY customer_id ASC LIMIT 10")
.then(rows => {
    //console.log(rows);
    
    const csv = arrayToCSV(rows);
    //console.log(csv);

    // write content to file
    try {
        let file = `${process.env.PWD}/test.csv`;
        fs.writeFileSync(file, csv)
        console.log(`File saved: ${file}`);
      } catch (err) {
        console.error(err)
      }
})
.catch(console => {
    console.log(error);
})



