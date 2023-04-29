import Container from '@mui/material/Container';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

interface Location {
  address: string;
  lat: number;
  lng: number;
}

export interface IMap {
  location: Location;
  zoomLevel: any;
}

const Map: React.FC<IMap> = ({ location, zoomLevel }) => {
  return (
    <Container maxWidth="sm" sx={{ height: '300px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB7qF46jUqw7yAVaI3fGHL5a4szm3LLM_o' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
