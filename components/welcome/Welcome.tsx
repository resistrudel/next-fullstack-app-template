import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

export interface IWelcome {
  title?: string;
  welcomeBody?: string;
  aboutBody?: string;
  medicalTitle?: string;
  medicalBody?: string;
  buttonTextMore?: string;
  buttonTextBook?: string;
  buttonLinkMore?: string;
  buttonLinkBook?: string;
}

const Welcome: React.FC<IWelcome> = ({
  title,
  welcomeBody,
  aboutBody,
  medicalTitle,
  medicalBody,
  buttonTextMore,
  buttonTextBook,
  buttonLinkMore,
  buttonLinkBook,
}) => {
  return (
    <Box
      mt={2}
      sx={{
        backgroundColor: '#E4D6D6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '50px',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
      }}
    >
      <Box>
        <Container maxWidth="sm">
          <Typography variant="h2" color="text.primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom>
            {welcomeBody || aboutBody}
          </Typography>
          {medicalTitle && (
            <Typography
              variant="h4"
              color="text.primary"
              gutterBottom
              sx={{ mt: 3 }}
            >
              {medicalTitle}
            </Typography>
          )}
          {medicalBody && (
            <Typography variant="body2" color="text.primary">
              {medicalBody}
            </Typography>
          )}
          {/* <CardActions> */}
          {buttonTextMore && (
            <Link href="/about">
              <Button size="small" variant="outlined" sx={{ mt: 2 }}>
                {buttonTextMore}
              </Button>
            </Link>
          )}

          {/* </CardActions> */}
        </Container>
      </Box>
      <Image
        src="/IMG_2248.jpg"
        alt="Placeholder"
        width={306}
        height={460}
        priority
      />
    </Box>
  );
};

export default Welcome;
