// Describes the response of the video API call.
export interface VideoData {
  name: string;
  videoUrl: string;
  notes: VideoNote[];
}

// Details the structure of a VideoNote typically retrieved from a video API call.
export interface VideoNote {
  start: string;
  note: string;
}
