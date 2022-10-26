const Employee = require("./Employee");

//engineer must be an extension of employee
class Engineer extends Employee {

    constructor(id, name, email, github) {
        super (name, id, email);

        this.github = github;
    }

    //return user github
    getGithub() {
        return this.github;
    }

    //change role to engineer
    getRole() {
        return "Engineer";
    }
    
}

module.exports = Engineer;