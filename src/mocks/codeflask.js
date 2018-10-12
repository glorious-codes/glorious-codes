export const codeFlaskInstanceMock = {
  updateCode: jest.fn(),
  onUpdate: jest.fn()
};

export const CodeFlaskMock = jest.fn(() => {
  return codeFlaskInstanceMock;
});
