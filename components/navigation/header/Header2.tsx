import Link from 'next/link';
import BookButton from '../../buttons/book/BookButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between center ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/about">About</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="space-x-5 m-5">
        <BookButton />
      </div>
    </header>
  );
};

export default Header;
