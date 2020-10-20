const Person = require('../modules/person');

exports.getAdminPage = (req, res) => {
    res.render("admin.ejs");
}

exports.saveUserData = (req, res) => {
    console.log(req.body)
    let user = {
        firstName: req.body.em,
        lastName: req.body.ps
    }
    const person = new Person(user);
    person.saveData();
    res.redirect('/admin');
}