import {NextPageContext} from 'next';

export type ZonePage<P = {}, IP = P> = {
  (props: P): JSX.Element | null;
  zone: any;
  defaultProps?: Partial<P>;
  displayName?: string;
  getInitialProps?(ctx: NextPageContext): Promise<IP>;
};
