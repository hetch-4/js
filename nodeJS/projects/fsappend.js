const fs = require('fs');
fs.appendFile('mahima.txt', 'file added succesfully', (err)=>{
  if(err) throw error;
  console.log('Data added in my file Successfully');
})
