import { SanitizeurlPipe } from './sanitizeurl.pipe';

describe('SanitizeurlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeurlPipe();
    expect(pipe).toBeTruthy();
  });
});
