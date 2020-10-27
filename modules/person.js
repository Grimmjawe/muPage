const fs = require("fs");
const path = require("path");
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'myData.json');

module.exports = class Person{
    constructor(person){
        this.firstName = person.firstName;
        this.lastName = person.lastName;
    }

    saveData(){
        fs.readFile(p, (er, fc) => {
            let myData = [];
            if(!er){
                myData = JSON.parse(fc);
            };

            myData.push(this);
            fs.writeFile(p, JSON.stringify(myData), (er) => {
                console.log('error: ' + er);
            });
        });
    }

    static readData(callBack){
        fs.readFile(p, (er, fc) => {
            if(!er){
                callBack([]);
            };
            callBack(JSON.parse(fc));
        });
    }
}