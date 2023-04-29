import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import Link from 'next/link';
import Map from '../utility/map/Map';

export interface IContact {
  title: string;
  subTitle: string;
  street: string;
  city: string;
  phoneLabel: string;
  emailLabel: string;
  phone: string;
  email: string;
  buttonText: string;
}

const Contact: React.FC<IContact> = ({
  title,
  subTitle,
  street,
  city,
  phoneLabel,
  emailLabel,
  phone,
  email,
  buttonText,
}) => {
  const location = {
    address: '415-417 N Camden Dr, Beverly Hills, CA 90210',
    lat: 34.068996,
    lng: -118.404483,
  };
  return (
    <Container
      sx={{
        backgroundColor: 'primary.main',
        padding: '50px',
      }}
    >
      <Typography
        variant="h2"
        color="primary.contrastText"
        align="center"
        gutterBottom
      >
        {title}
      </Typography>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Container maxWidth="xs">
          <Box>
            <Typography variant="h5" color="primary.contrastText" gutterBottom>
              {subTitle}
            </Typography>
          </Box>
          <Box
            mt={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <LocationOnIcon sx={{ color: 'white' }} />
            <Box ml={5}>
              <Link
                href="http://maps.google.com/?q=415 N Camden Dr, Beverly Hills, CA 90210"
                target="_blank"
                rel="noopener"
                variant="body2"
                color="primary.contrastText"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                {street}
              </Link>
              <Link
                href="http://maps.google.com/?q=415 N Camden Dr, Beverly Hills, CA 90210"
                target="_blank"
                rel="noopener"
                variant="body2"
                color="primary.contrastText"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                {city}
              </Link>
            </Box>
          </Box>
          <Box
            mt={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <LocalPhoneIcon sx={{ color: 'white' }} />
            <Box ml={5}>
              <Typography
                variant="body2"
                color="primary.contrastText"
                gutterBottom
              >
                {phoneLabel}
              </Typography>
              <Link
                // variant="body2"
                href=""
                color="primary.contrastText"
                sx={{ fontWeight: 'bold' }}
              >
                {phone}
              </Link>
            </Box>
          </Box>
          <Box
            mt={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <EmailIcon sx={{ color: 'white' }} />
            <Box ml={5}>
              <Typography
                variant="body2"
                color="primary.contrastText"
                gutterBottom
              >
                {emailLabel}
              </Typography>
              <Link
                href="mailto: info@aramedspa.com"
                color="primary.contrastText"
                sx={{ fontWeight: 'bold' }}
              >
                {email}
              </Link>
            </Box>
          </Box>
          {/* <Box mt={2}>
          <Button size="small" variant="contained">
            {buttonText}
          </Button>
        </Box> */}
        </Container>
        <Container sx={{ mt: { xs: 5, sm: 0 } }}>
          <Map location={location} zoomLevel={17} />
        </Container>
      </Container>
    </Container>
  );
};

export default Contact;
