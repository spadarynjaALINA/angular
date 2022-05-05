import { TitleLengthPipe } from '../../title-length.pipe';

describe('TitleLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new TitleLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
