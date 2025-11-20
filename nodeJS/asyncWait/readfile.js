const fs = require('fs').promises;

async function readFile(){
    try{
        const data = await fs.readFile('text.txt', 'utf8');
        console.log(data)
    }catch(error){
        console.log('Error reading file:', error);
    }
}

readFile()