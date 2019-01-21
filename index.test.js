const hello = require('./hello');
const handleListen = require('./listeningHandler');

it('should call res.send() with Travis CI works!', () => {
  const send = jest.fn();
  const res = {
    send,
  };
  hello({}, res);
  expect(send.mock.calls).toHaveLength(1);
  expect(send.mock.calls[0][0]).toBe('Travis CI works11111111111111!');
});


it('should call log with Example app...', () => {
  const PORT = 3000;
  const log = jest.fn();
  handleListen(log, PORT);
  expect(log.mock.calls).toHaveLength(1);
  expect(log.mock.calls[0][0]).toBe(`Example app listening on port ${PORT.toString()}!`);
});
