import React from 'react';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';

// Main Page
const HomePage = () => {
  return (
    <Typography
      type="Display"
      color={colors.blueGrey.darken3}
      marginBottom={'1rem'}
    >
      Coming Soon...
    </Typography>
  );
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default HomePage;
