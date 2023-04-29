import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface ITreatment {
  treatmentTitle: string;
  treatmentBody: string;
  buttonText: string;
  treatmentImage: string;
}

const Treatment: React.FC<ITreatment> = ({
  treatmentTitle,
  treatmentBody,
  buttonText,
  treatmentImage,
}) => {
  return (
    <Card sx={{ m: 1 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={treatmentImage}
        title={treatmentTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {treatmentTitle}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.primary">
          {treatmentBody}
        </Typography>
        {/* <CardActions> */}
        <Button size="small" variant="contained" sx={{ mt: 2 }}>
          {buttonText}
        </Button>
        {/* </CardActions> */}
      </CardContent>
    </Card>
  );
};

export default Treatment;
