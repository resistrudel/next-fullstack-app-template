import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Treatments from '../components/treatments/Treatments';
import { mockTreatmentsProps } from '../components/treatments/Treatments.mocks';
import { NextPageWithLayout } from './page';

export interface ITreatments {}

const TreatmentsPage: NextPageWithLayout<ITreatments> = ({}) => {
  return (
    <>
      <Box
        mt={4}
        sx={{
          backgroundColor: '#E4D6D6',
        }}
      >
        <Container maxWidth="sm" sx={{ padding: 4 }}>
          <Typography variant="h2" color="text.primary" gutterBottom>
            Consultation
          </Typography>
          <Typography variant="body2" color="text.primary" component="div">
            During the first consultation Dr Sarah will carefully spend time to
            listen to your needs, examine your facial structure and assess the
            scope of treatments. She will design a bespoke treatment schedule
            for subsequent visits as well as address your questions or concerns
            about the treatments. Dr Sarah is passionate about aesthetics,
            skincare and overall wellness and will include recommendations for
            all aspects in your treatment package.
          </Typography>
          <Button size="small" variant="contained" sx={{ my: 2 }}>
            Book Consultation
          </Button>
        </Container>
      </Box>
      <Treatments title={mockTreatmentsProps.base.title} />
    </>
  );
};

export default TreatmentsPage;

TreatmentsPage.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
