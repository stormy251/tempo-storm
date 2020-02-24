import React, {ReactNode}  from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const IconContainer = styled(motion.a)`
  color: ${({color}) => color ? color : 'currentColor'};
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  margin: 0 auto;
  
  :hover {
    cursor: pointer;
  }
`;

interface Props {
  /** Desired fill color of the icon */
  color?: string;
  /** contains the URL that links to another web page */
  path?: string;
  /** single react node that acts as a placeholder (slots, ng-content, etc.) */
  children?: ReactNode;
  /** Sets the framer-motion animations variants */
  variants?: any;
  /** Sets the framer-motion hover animations */
  whileHover?: any;
}

const Icon = (props: Props) => {
  const {path} = props;
  return (
    <IconContainer
      href={path}
      {...props}
    />
  );
};

export default Icon;
