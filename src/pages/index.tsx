import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import Spacer from '@atoms/Spacer/Spacer';
import Text from '@atoms/Text/Text';
import Meta from '@blocks/meta';
import GetStartedOverview from '@molecules/GetStartedOverview/GetStartedOverview';
import DefaultLayout from '@templates/layouts/DefaultLayout/DefaultLayout';

function HomePage() {
  return (
    <>
      <Meta title="Welcome!" />
      <Container>
        <Heading level="h2" align="center" className="h1">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>

        <Text align="center">
          Get started by editing <Text variant="code">pages/index.tsx</Text>
        </Text>

        <Spacer size="base" />

        <GetStartedOverview />
      </Container>
    </>
  );
}

HomePage.Layout = DefaultLayout;

export default HomePage;
