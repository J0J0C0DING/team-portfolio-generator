const Intern = require('../lib//Intern');

test('Creates new intern object', () => {
  const intern = new Intern('Joey', 1, 'example@yahoo.com');

  expect(intern.name).toBe('Joey');
  expect(intern.id).toEqual(1);
  expect(intern.email).toBe('example@yahoo.com');
});

test("Gets intern's name", () => {
  const intern = new Intern('Joey', 1, 'example.rebne@yahoo.com');

  expect(intern.getName()).toBe('Joey');
});

test(`Gets intern's id`, () => {
  const intern = new Intern('Joey', 1, 'example.rebne@yahoo.com');

  expect(intern.getId()).toEqual(1);
});

test(`Gets intern's email`, () => {
  const intern = new Intern('Joey', 1, 'example.rebne@yahoo.com');

  expect(intern.getEmail()).toBe('example.rebne@yahoo.com');
});

test(`Gets intern's school name`, () => {
  const intern = new Intern('Joey', 1, 'example.rebne@yahoo.com', 'ExampleSchool');

  expect(intern.getSchool()).toBe('ExampleSchool');
});

test(`Gets intern's role`, () => {
  const intern = new Intern('Joey', 1, 'example.rebne@yahoo.com', 'ExampleSchool');

  expect(intern.getRole()).toBe('Intern');
});
