import React from 'react';
import styled from 'styled-components';
import Typography from 'zones/app/components/Typography';
import {colors} from 'lib/theme';
import {VideoNote} from 'lib/types/video';
import {AnimatePresence, motion} from 'framer-motion';
import {
  ANIMATE_VARIANT_NAME,
  EXIT_VARIANT_NAME,
  fadeUpVariants,
  INITIAL_VARIANT_NAME
} from 'lib/framer-motion/motion-variants';

const VideoDetailsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${colors.blueGrey.lighten5};
  margin-top: 1.5rem;
  width: 400px;
`;

interface Props {
  /** URL for the source of the video */
  videoTitle: string;
  /** Note to be displayed for 5 seconds at specific times during the video playback */
  activeNote?: VideoNote;
}

const VideoDetails = (props: Props) => {
  const {videoTitle, activeNote} = props;

  return (
    <VideoDetailsContainer>
      <Typography type="Title" color={colors.blueGrey.darken3} marginBottom="1rem">
        {videoTitle}
      </Typography>
      <AnimatePresence exitBeforeEnter>
        {activeNote && (
          <motion.div
            variants={fadeUpVariants}
            initial={INITIAL_VARIANT_NAME}
            animate={ANIMATE_VARIANT_NAME}
            exit={EXIT_VARIANT_NAME}
          >
            <Typography
              type="Subtitle"
              color={colors.blueGrey.darken3}
              decoration="underline"
              marginBottom="0.25rem"
            >
              Teacher note at {activeNote.start}:
            </Typography>
            <Typography type="Body" color={colors.blueGrey.darken3}>
              {activeNote.note}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </VideoDetailsContainer>
  );
};

export default VideoDetails;
