import React from 'react';
import styled from 'styled-components';
import {colors} from 'lib/theme';
import {SideBarLink} from 'zones/home/components/SideBarLink';

const AVATAR_SIZE = '80px';

const SideBarContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.blueGrey.lighten2};
  width: 100%;
  height: 100%;
`;

const Avatar = styled.div`
  border-radius: 50%;
  background-color: ${colors.white};
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
`;

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Avatar/>
      <SideBarLink text="About" urlPath="/about"/>
      <SideBarLink text="Work" urlPath="/work"/>
      <SideBarLink text="Contact" urlPath="/contact"/>
    </SideBarContainer>
  );
};
