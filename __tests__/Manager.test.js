const Manager = require('../lib//Manager');

test('Creates new manager object', () => {
  const manager = new Manager('Joey', 1, 'example@yahoo.com');

  expect(manager.name).toBe('Joey');
  expect(manager.id).toEqual(1);
  expect(manager.email).toBe('example@yahoo.com');
});

test("Gets manager's name", () => {
  const manager = new Manager('Joey', 1, 'example.rebne@yahoo.com');

  expect(manager.getName()).toBe('Joey');
});

test(`Gets manager's id`, () => {
  const manager = new Manager('Joey', 1, 'example.rebne@yahoo.com');

  expect(manager.getId()).toEqual(1);
});

test(`Gets manager's email`, () => {
  const manager = new Manager('Joey', 1, 'example.rebne@yahoo.com');

  expect(manager.getEmail()).toEqual('example.rebne@yahoo.com');
});

test(`Gets manager's office number`, () => {
  const manager = new Manager('Joey', 1, 'example.rebne@yahoo.com', 1234);

  expect(manager.officeNumber).toEqual(1234);
});

test(`Gets manager's role`, () => {
  const manager = new Manager('Joey', 1, 'example.rebne@yahoo.com', '1234');

  expect(manager.getRole()).toBe('Manager');
});
