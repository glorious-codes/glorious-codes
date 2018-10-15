export const clipboardJSInstanceMock = {
  on: jest.fn()
};

export const ClipboardJSMock = jest.fn(() => {
  return clipboardJSInstanceMock;
});
