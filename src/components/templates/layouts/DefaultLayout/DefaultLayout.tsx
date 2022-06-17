import Text from '@atoms/Text/Text';

import css from './DefaultLayout.module.scss';

export type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: LayoutProps) => (
  <div className={css.container}>
    <main className={css.main}>{children}</main>

    <footer className={css.footer}>
      <Text variant="body">
        <Text color="secondary" variant="label">
          <a href="https://github.com/paulpoot/forward">Forward</a>
        </Text>{' '}
        - An opinionated Next.js boilerplate
      </Text>
    </footer>
  </div>
);

export default DefaultLayout;
