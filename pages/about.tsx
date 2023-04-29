import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Welcome from '../components/welcome/Welcome';
import { mockWelcomeProps } from '../components/welcome/Welcome.mocks';
import { NextPageWithLayout } from './page';

export interface IAbout {}

const About: NextPageWithLayout<IAbout> = ({}) => {
  return (
    <Welcome
      title={mockWelcomeProps.base.title}
      aboutBody={mockWelcomeProps.base.aboutBody}
      medicalTitle={mockWelcomeProps.base.medicalTitle}
      medicalBody={mockWelcomeProps.base.medicalBody}
      buttonTextBook={mockWelcomeProps.base.buttonTextBook}
    />
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
