import Button from '@mui/material/Button';

export interface IBookButton extends React.ComponentPropsWithoutRef<'button'> {}

const BookButton: React.FC<IBookButton> = ({ className }) => {
  return (
    <Button variant="contained">
      Book Consultation
    </Button>
  );
};

export default BookButton;
