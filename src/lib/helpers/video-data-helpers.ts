/**
 * This method will take in a noteTime string represented by a formatted value of "M:S"
 * where M is the integer representation of the minutes, and S is the representation of Seconds
 * @param noteTime
 */
export const convertNoteTimeToSeconds = (noteTime: string): number => {
  // noteTime format is expected to be of the form "M:SS"
  const [minuteValue, secondValue] = noteTime.split(':');
  return parseInt(minuteValue) * 60 + parseInt(secondValue);
};
