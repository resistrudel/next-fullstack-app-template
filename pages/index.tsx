import { NextPageWithLayout } from './page';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import CatCard from '../components/cards/cat/CatCard';
import {mockCatCardProps} from '../components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
        </div>
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  )
}
