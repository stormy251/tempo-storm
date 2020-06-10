import React, {useRef, useState} from 'react';
import {VideoNote} from 'lib/types/video';
import {convertNoteTimeToSeconds} from 'lib/helpers/video-data-helpers';

interface Props {
  /** URL for the source of the video */
  videoUrl: string;
  /** URL for the source of the video */
  videoNotes: VideoNote[];
  /** This event will fire when the video playback hits a time marked by a given note */
  onVideoNoteStart: (note: VideoNote) => void;
  /** This event will fire when the video playback is 5 seconds after the time marked by a given note */
  onVideoNoteEnd: () => void;
}

const VideoPlayer = (props: Props) => {
  const {videoUrl, videoNotes, onVideoNoteStart, onVideoNoteEnd} = props;
  const videoEl = useRef(null);
  const [showingVideoNote, setShowingVideoNote] = useState(false);
  const videoNoteReverseIndex = {};
  const videoNoteDuration = 5; // this is hard coded to 5 to meet the project specifications, but this could be updated to be a prop in the future.

  // This will process the videoNotes into a reverse Index such that we can perform constant time lookups for the notes
  videoNotes.forEach((videoNote) => {
    const formattedTime = convertNoteTimeToSeconds(videoNote.start);
    videoNoteReverseIndex[formattedTime] = videoNote;
  });

  const handleTimeUpdate = () => {
    const wholeSecondValue = parseInt(videoEl.current.currentTime);
    const currentVideoNote = videoNoteReverseIndex[wholeSecondValue];
    if (currentVideoNote && !showingVideoNote) {
      onVideoNoteStart(currentVideoNote);
      setShowingVideoNote(true);
    }
    if (videoNoteReverseIndex[wholeSecondValue - videoNoteDuration]) {
      onVideoNoteEnd();
      setShowingVideoNote(false);
    }
  };

  return (
    <video width="400" ref={videoEl} controls onTimeUpdate={handleTimeUpdate}>
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
