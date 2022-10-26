const Employee = require('./Employee');

//intern must be an extension of employee
class Intern extends Employee {

    constructor(id, name, email, school) {
        super(name, id, email);
        this.school = school
    }

    //return user school
    getSchool() {
        return this.school;
    }

    //change role to engineer
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;