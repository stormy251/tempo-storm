import React from 'react';
import {ZonePage} from 'lib/types/ZonePage';
import {useRouter} from 'next/router';
import HomeZone from 'zones/home';
import Column from 'zones/app/components/Column';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';

const ErrorContentContainer = styled(motion.div)`
  border-radius: 0.5rem;
  background: ${colors.white};
  padding: 1rem;
`;

const BackHomeButton = styled(motion.button)`
  padding: 0.5rem 0;
`;

const errorContainerVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 30
  }
};

// This page is used for our 404/page-not-found management
const ErrorPage: ZonePage = () => {
  const router = useRouter();

  return (
    <Column justify="center">
      <ErrorContentContainer
        variants={errorContainerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Typography type="Display" align="center" marginBottom="1rem">
          Oops...
        </Typography>
        <Typography type="Title" align="center" marginBottom="0.5rem">
          404 Page Not Found
        </Typography>
        <BackHomeButton
          onClick={() => router.push('/')}
        >
          Back Home
        </BackHomeButton>
      </ErrorContentContainer>
    </Column>
  );
};

ErrorPage.zone = HomeZone;

// Default export is a requirement for nextjs to know this is the export for the page.
export default ErrorPage;
