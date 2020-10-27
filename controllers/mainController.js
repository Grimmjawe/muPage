const Person = require('../modules/person');

exports.fetchPerson = (req, res) => {
    Person.readData(person => {
        console.log(person);
        res.render("index.ejs", { personData: person });
    });
}