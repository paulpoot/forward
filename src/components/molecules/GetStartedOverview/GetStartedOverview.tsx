import * as React from 'react';

import Card from '../../atoms/Card/Card';
import css from './GetStartedOverview.module.scss';

const GetStartedOverview = () => {
  return (
    <div className={css.grid}>
      <Card
        title="Documentation"
        description="Find in-depth information about Next.js features and API."
        link="https://nextjs.org/docs"
      />

      <Card
        title="Learn"
        description="Learn about Next.js in an interactive course with quizzes!"
        link="https://nextjs.org/learn"
      />

      <Card
        title="Examples"
        description="Discover and deploy boilerplate example Next.js projects."
        link="https://github.com/vercel/next.js/tree/canary/examples"
      />

      <Card
        title="Deploy"
        description="Instantly deploy your Next.js site to a public URL with Vercel."
        link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      />
    </div>
  );
};

export default GetStartedOverview;
