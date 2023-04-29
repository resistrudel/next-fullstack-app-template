import Contact from '../components/contact/Contact';
import { mockContactProps } from '../components/contact/Contact.mocks';
import Hero from '../components/hero/Hero';
import { mockHeroProps } from '../components/hero/Hero.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Treatments from '../components/treatments/Treatments';
import { mockTreatmentsProps } from '../components/treatments/Treatments.mocks';
import Welcome from '../components/welcome/Welcome';
import { mockWelcomeProps } from '../components/welcome/Welcome.mocks';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero
        title={mockHeroProps.base.title}
        buttonText={mockHeroProps.base.buttonText}
      />
      <Welcome
        title={mockWelcomeProps.base.title}
        welcomeBody={mockWelcomeProps.base.welcomeBody}
        buttonTextMore={mockWelcomeProps.base.buttonTextMore}
      />
      <Treatments title={mockTreatmentsProps.base.title} />
      <Contact
        title={mockContactProps.base.title}
        subTitle={mockContactProps.base.subTitle}
        street={mockContactProps.base.street}
        city={mockContactProps.base.city}
        phoneLabel={mockContactProps.base.phoneLabel}
        emailLabel={mockContactProps.base.emailLabel}
        phone={mockContactProps.base.phone}
        email={mockContactProps.base.email}
        buttonText={mockContactProps.base.buttonText}
      />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
