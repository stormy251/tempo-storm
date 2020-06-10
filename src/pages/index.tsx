import React, {useState} from 'react';
import {GetServerSideProps} from 'next';
import {colors} from 'lib/theme';
import styled from 'styled-components';
import NavBar from 'zones/app/components/NavBar';
import {VideoData, VideoNote} from 'lib/types/video';
import VideoDetails from 'zones/video/components/VideoDetails';
import VideoPlayer from 'zones/video/components/VideoPlayer';

// Primary layout container using grid
const PageContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 3rem 1fr;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
`;

// Holds the content for the body of the webpage.
const PageContentContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.blueGrey.lighten3};
  padding: 1.5rem;
  overflow-y: auto;
`;

interface Props {
  /** Video type data returned from the API */
  videoData: VideoData;
}

// Main Page
const ClassroomVideoPage = (props: Props) => {
  const {videoData} = props;
  const [activeNote, setActiveNote] = useState(null);

  const handleVideoNoteStart = (note: VideoNote) => {
    setActiveNote(note);
  };

  const handleVideoNoteEnd = () => {
    setActiveNote(null);
  };

  return (
    <PageContainer>
      <NavBar />
      <PageContentContainer>
        <VideoPlayer
          videoUrl={videoData.videoUrl}
          onVideoNoteStart={handleVideoNoteStart}
          onVideoNoteEnd={handleVideoNoteEnd}
          videoNotes={videoData.notes}
        />
        <VideoDetails videoTitle={videoData.name} activeNote={activeNote} />
      </PageContentContainer>
    </PageContainer>
  );
};

// Data acquisition to ensure a fast time to first interaction.
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`http://take-home-assignment.tempo.fit/video.json`);
  const videoData = await res.json();

  // Pass data to the page via props
  return {props: {videoData}};
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default ClassroomVideoPage;
