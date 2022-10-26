const Intern = require("../lib/Intern");

//To Do: rewrite this test 

const internOne = new Intern(1, "Jane Doe", "janedoe@gmail.com");
test('checks for the intern name', () => {
    const name = internOne.getName();
    expect(name).toBe('Jane Doe');
});

test('checks for the intern id', () => {
    const id = internOne.getId();
    expect(id).toBe(1);
});


test('checks for the intern email', () => {
    const email = internOne.getEmail();
    expect(email).toBe('janedoe@gmail.com');
});


test('checks for the intern role', () => {
    const role = internOne.getRole();
    expect(role).toBe("Intern");
});