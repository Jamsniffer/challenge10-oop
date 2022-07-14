const Employee = require("../lib/Employee");

const employeeOne = new Employee(1, "Jane Doe", "janedoe@gmail.com");
test('checks for the employee name', () => {
    const name = employeeOne.getName();
    expect(name).toBe('Jane Doe');
});

test('checks for the employee id', () => {
    const id = employeeOne.getId();
    expect(id).toBe(1);
});


test('checks for the employee email', () => {
    const email = employeeOne.getEmail();
    expect(email).toBe('janedoe@gmail.com');
});


test('checks for the employee role', () => {
    const role = employeeOne.getRole();
    expect(role).toBe("Employee");
});
