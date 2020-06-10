import {convertNoteTimeToSeconds} from 'lib/helpers/video-data-helpers';

describe('convertNoteTimeToSeconds', () => {
  test('should convert a minute into 60 seconds', () => {
    expect(convertNoteTimeToSeconds('1:0')).toBe(60);
  });
});
