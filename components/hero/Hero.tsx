import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export interface IHero {
  title: string;
  buttonText: string;
}

const Hero: React.FC<IHero> = ({ title, buttonText }) => {
  return (
    <Box
      mt={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: 'black',
      }}
    >
      <Image
        src="/hero2.png"
        alt="Women during treatment"
        width={1680}
        height={618}
        priority
        style={{ opacity: '0.6' }}
      />
      <Container
        maxWidth="md"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          color="text.secondary"
          gutterBottom
          sx={{
            fontWeight: '400',
            letterSpacing: 2,
          }}
        >
          {title}
        </Typography>
        <Button
          variant="outlined"
          color="light"
          sx={{
            display: {
              xs: 'none',
              md: 'inline-block',
            },
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
