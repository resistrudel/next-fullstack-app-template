import styles from './Search.module.css';

export interface ISearch {
  sampleTextProp: string;
}

const Search: React.FC<ISearch> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Search;
