import React, {ReactNode} from 'react';
import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'lib/theme';

export const STYLES = {
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500'
  }
};

const typographyPropsMixin = ({align, color, display, marginBottom, noWrap, decoration}: Props) => {
  return css`
    color: ${() => color};
    display: ${display ? display : 'inherit'};
    margin: 0 0 ${marginBottom} 0;
    overflow: ${noWrap ? 'hidden' : null};
    text-align: ${align ? align : 'inherit'};
    text-overflow: ${noWrap ? 'ellipsis' : null};
    white-space: ${noWrap ? 'noWrap' : null};
    text-decoration: ${decoration ? decoration : null};
  `;
};

const DisplayText = styled(motion.h1)`
  font-size: 28px;
  font-weight: ${STYLES.fontWeight.medium};
  letter-spacing: 0;
  line-height: 36px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const HeaderText = styled(motion.h2)`
  font-size: 36px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const HeroText = styled(motion.h3)`
  font-size: 22px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const TitleText = styled(motion.h4)`
  font-size: 16px;
  font-weight: ${STYLES.fontWeight.medium};
  letter-spacing: 0;
  line-height: 20px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const SubtitleText = styled(motion.h5)`
  font-size: 14px;
  font-weight: ${STYLES.fontWeight.light};
  letter-spacing: 0;
  line-height: 20px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const BodyText = styled(motion.p)`
  font-size: 12px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 16px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const SectionText = styled(motion.p)`
  font-size: 11px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0.8px;
  line-height: 13px;
  text-transform: uppercase;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const CaptionText = styled(motion.p)`
  font-size: 10px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 12px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const typographyTypeMap = {
  Display: DisplayText,
  Header: HeaderText,
  Hero: HeroText,
  Title: TitleText,
  Subtitle: SubtitleText,
  Body: BodyText,
  Section: SectionText,
  Caption: CaptionText
};

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** Sets the text-align css property */
  align?: 'center' | 'inherit' | 'left' | 'right' | 'justify';
  /** Sets the color css property */
  color?: string;
  /** Sets the display css property */
  display?: 'inherit' | 'initial' | 'block' | 'inline' | 'inline-block';
  /** Sets the bottom margin of the element to a CSS string value */
  marginBottom?: string;
  /** Sets the fixed width on the text containing element, as well as all the appropriate CSS to apply an ending ellipsis */
  noWrap?: boolean;
  /** Sets the core styles of the text to the predefined typography types */
  type: 'Display' | 'Header' | 'Hero' | 'Title' | 'Subtitle' | 'Body' | 'Section' | 'Caption';
  /** Sets the framer-motion animations variants */
  variants?: any;
  /** Sets the styles for the text-decoration property */
  decoration?: 'underline' | 'none';
}

/** The Typography component is responsible for ensuring all text rendered in the application is consistent. */
const Typography = (props: Props) => {
  const {type, children, color = colors.blueGrey.darken3} = props;
  const TypographyComponent = typographyTypeMap[type] || typographyTypeMap['Body'];

  return (
    <TypographyComponent color={color} {...props}>
      {children}
    </TypographyComponent>
  );
};

export default Typography;
