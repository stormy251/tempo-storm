import Typography from 'zones/app/components/Typography';
import {colors} from 'lib/theme';
import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  background-color: ${colors.blueGrey.base};
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 0 1rem;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <FlexRow>
        <Typography type="Subtitle" color={colors.white}>
          Browse Courses
        </Typography>
        <Typography type="Subtitle" color={colors.white}>
          Current Course
        </Typography>
        <Typography type="Subtitle" color={colors.white}>
          Classroom
        </Typography>
      </FlexRow>
      <FlexRow>
        <Typography type="Subtitle" color={colors.white}>
          Stormy
        </Typography>
      </FlexRow>
    </NavBarContainer>
  );
};

export default NavBar;
