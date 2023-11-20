const { readFile,writeFile } = require('fs');

readFile('./files/text/read.txt', 'utf-8', (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const readenString = result;
    writeFile('./files/text/write.txt', readenString, (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
});