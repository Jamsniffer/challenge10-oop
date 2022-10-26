const Employee = require("./Employee")

//Manager must be an extension of employee
class Manager extends Employee {

    constructor(id, name, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }

    //return user office number
    getOfficeNumber () {
        return this.officeNumber;
    }

    //change role to manager
    getRole () {
        return 'Manager';
    }

}

module.exports = Manager;