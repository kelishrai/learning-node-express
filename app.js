const { readFile,writeFile } = require('fs');
const util = require('util');
const uRF = util.promisify(readFile);
const wRF = util.promisify(writeFile);

const start = async() => {
    try {
        const value1 = await uRF('forRead.txt', 'utf-8');
        const value2 = await uRF('for2ndRead.txt', 'utf-8');
        await wRF('written-file.txt',`${value1} \t ${value2}`);
        const wvalue = await uRF('written-file.txt', 'utf-8');
        console.log(value1 + "\n\t" + value2 + "\n\t" + wvalue);
    } catch (error) {
        console.log(error);
    }
}

start()
