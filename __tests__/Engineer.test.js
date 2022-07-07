const Engineer = require('../lib/Engineer');

test('Creates new engineer object', () => {
  const engineer = new Engineer('Joey', 1, 'example@yahoo.com');

  expect(engineer.name).toBe('Joey');
  expect(engineer.id).toEqual(1);
  expect(engineer.email).toBe('example@yahoo.com');
});

test("Gets engineer's name", () => {
  const engineer = new Engineer('Joey', 1, 'example.rebne@yahoo.com');

  expect(engineer.getName()).toBe('Joey');
});

test(`Gets engineer's id`, () => {
  const engineer = new Engineer('Joey', 1, 'example.rebne@yahoo.com');

  expect(engineer.getId()).toEqual(1);
});

test(`Gets engineer's email`, () => {
  const engineer = new Engineer('Joey', 1, 'example.rebne@yahoo.com');

  expect(engineer.getEmail()).toBe('example.rebne@yahoo.com');
});

test(`Gets engineer's GitHub username`, () => {
  const engineer = new Engineer('Joey', 1, 'example.rebne@yahoo.com', 'ExampleUser');

  expect(engineer.getGithub()).toBe('ExampleUser');
});

test(`Gets engineer's role`, () => {
  const engineer = new Engineer('Joey', 1, 'example.rebne@yahoo.com', 'ExampleUser');

  expect(engineer.getRole()).toBe('Engineer');
});
