import LocationOnIcon from '@mui/icons-material/LocationOn';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export interface ILocation {
  text: string;
}

const LocationPin: React.FC<ILocation> = ({ text }) => (
  <Container sx={{ width: '210px' }}>
    <LocationOnIcon />
    <Typography variant="caption">{text}</Typography>
  </Container>
);

export default LocationPin;
