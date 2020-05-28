import React from 'react';
import {ZonePage} from 'lib/types/ZonePage';
import HomeZone from 'zones/home';
import Typography from 'zones/app/components/Typography';
import {colors} from 'lib/theme';
import Column from 'zones/app/components/Column';

const parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  },
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

const childVariants = {
  visible: {
    y: 0,
    opacity: 1
  },
  hidden: {
    y: 40,
    opacity: 0
  }
};

// Main Page
const HomePage: ZonePage = () => {
  return (
    <Column
      justify="space-between"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Column variants={childVariants} flex>
        <Typography
          type="Display"
          color={colors.blueGrey.darken3}
          marginBottom={'1rem'}
        >
          Coming Soon...
        </Typography>
      </Column>
    </Column>
  );
};

HomePage.zone = HomeZone;

// Default export is a requirement for nextjs to know this is the export for the page.
export default HomePage;
