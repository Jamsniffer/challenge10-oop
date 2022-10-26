const Manager = require("../lib/Manager");

const managerOne = new Manager(1, "Jane Doe", "janedoe@gmail.com");
test('checks for the manager name', () => {
    const name = managerOne.getName();
    expect(name).toBe('Jane Doe');
});

test('checks for the manager id', () => {
    const id = managerOne.getId();
    expect(id).toBe(1);
});


test('checks for the manager email', () => {
    const email = managerOne.getEmail();
    expect(email).toBe('janedoe@gmail.com');
});


test('checks for the manager role', () => {
    const role = managerOne.getRole();
    expect(role).toBe("Manager");
});