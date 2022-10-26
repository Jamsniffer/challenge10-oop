const Engineer = require("../lib/Engineer");

//To Do: rewrite this test 

const engineerOne = new Engineer(1, "Jane Doe", "janedoe@gmail.com");
test('checks for the engineer name', () => {
    const name = engineerOne.getName();
    expect(name).toBe('Jane Doe');
});

test('checks for the engineer id', () => {
    const id = engineerOne.getId();
    expect(id).toBe(1);
});


test('checks for the engineer email', () => {
    const email = engineerOne.getEmail();
    expect(email).toBe('janedoe@gmail.com');
});


test('checks for the engineer role', () => {
    const role = engineerOne.getRole();
    expect(role).toBe("Engineer");
});