import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'lib/theme';

const Column = styled(motion.div)<{
  color?: string;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  width?: string;
  height?: string;
  justify?: string;
  align?: string;
  flex?: boolean;
}>`
  align-items: ${({align}) => align ? align : null};
  box-sizing: border-box;
  background-color: ${({color}) => color ? color : null};
  border-bottom: ${({borderBottom}) => borderBottom ? `1px solid ${colors.gray.base}` : null};
  border-left: ${({borderLeft}) => borderLeft ? `1px solid ${colors.gray.base}` : null};
  border-right: ${({borderRight}) => borderRight ? `1px solid ${colors.gray.base}` : null};
  border-top: ${({borderTop}) => borderTop ? `1px solid ${colors.gray.base}` : null};
  display: flex;
  flex-direction: column;
  justify-content: ${({justify}) => justify ? justify : null};
  max-width: ${({width}) => width ? width : '100%'};
  width: ${({width}) => width ? width : '100%'};
  
  ${({flex, height}) => flex ? css`
    flex: 1;
  ` : css`
    height: ${height ? height : '100%'};
    min-height:  ${height ? height : '100%'};
  `}
`;

export default Column;
