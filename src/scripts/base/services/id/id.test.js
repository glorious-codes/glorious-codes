import shortId from 'shortid';
import idService from './id';

describe('Id Service', () => {
  beforeEach(() => {
    shortId.generate = jest.fn();
  });

  it('should generate some unique id', () => {
    idService.generate();
    expect(shortId.generate).toHaveBeenCalled();
  });
});
