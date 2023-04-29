import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Treatment from '../treatment/Treatment';
import { mockTreatmentProps } from '../treatment/Treatment.mocks';

export interface ITreatments {
  title: string;
}

const Treatments: React.FC<ITreatments> = ({ title }) => {
  return (
    <Box mt={2} sx={{ padding: '50px' }}>
      <Typography variant="h2" color="text.primary" align="center" gutterBottom>
        {title}
      </Typography>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Treatment
          treatmentTitle={mockTreatmentProps.base.treatmentTitle1}
          treatmentBody={mockTreatmentProps.base.treatmentBody1}
          treatmentImage={mockTreatmentProps.base.treatmentImage1}
          buttonText={mockTreatmentProps.base.buttonText}
        />
        <Treatment
          treatmentTitle={mockTreatmentProps.base.treatmentTitle2}
          treatmentBody={mockTreatmentProps.base.treatmentBody2}
          treatmentImage={mockTreatmentProps.base.treatmentImage2}
          buttonText={mockTreatmentProps.base.buttonText}
        />
      </Container>
    </Box>
  );
};

export default Treatments;
