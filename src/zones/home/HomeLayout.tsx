import React, {ReactNode} from 'react';
import {AnimatePresence} from 'framer-motion';
import {colors} from 'lib/theme';
import Column from 'zones/app/components/Column';

const homeVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children: ReactNode;
  /** String representing the requested route name */
  transitionKey: string;
}

const HomeLayout = (props: Props) => {
  const {children, transitionKey} = props;

  return (
    <Column
      justify="center"
      color={colors.lightBlue.lighten4}
    >
      <AnimatePresence
        exitBeforeEnter
      >
        <Column
          key={transitionKey}
          variants={homeVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            staggerChildren: 0.6
          }}
        >
          {children}
        </Column>
      </AnimatePresence>
    </Column>
  );
};

export default HomeLayout;
