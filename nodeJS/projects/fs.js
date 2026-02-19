const fs = require('fs');

fs.readFile('mahima.txt', 'utf8', (err, data)=>{
  if(err){
    throw err;
  }
  console.log("Mahima Bhardwaj, You hava Created file System successfully");
});
