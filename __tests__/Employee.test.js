const Employee = require('../lib/Employee');

test('Creates new employee object', () => {
  const employee = new Employee('Joey', 1, 'joey.rebne@yahoo.com');

  expect(employee.name).toBe('Joey');
  expect(employee.id).toEqual(1);
  expect(employee.email).toBe('joey.rebne@yahoo.com');
});

test("Gets employee's name", () => {
  const employee = new Employee('Joey', 1, 'example.rebne@yahoo.com');

  expect(employee.getName()).toBe('Joey');
});

test(`Gets employee's id`, () => {
  const employee = new Employee('Joey', 1, 'example.rebne@yahoo.com');

  expect(employee.getId()).toEqual(1);
});

test(`Gets employee's email`, () => {
  const employee = new Employee('Joey', 1, 'example.rebne@yahoo.com');

  expect(employee.getEmail()).toEqual('example.rebne@yahoo.com');
});

test(`Gets employee's role`, () => {
  const employee = new Employee('Joey', 1, 'example.rebne@yahoo.com');

  expect(employee.getRole()).toEqual('Employee');
});
