import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Contact from '../components/contact/Contact';
import { mockContactProps } from '../components/contact/Contact.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
export interface IContact {}

const ContactPage: NextPageWithLayout<IContact> = ({}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Sending');
    let data = {
      firstName,
      lastName,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setDialogOpen(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    });
  };
  return (
    <>
      <Box mt={3}>
        <Container maxWidth="md">
          <Dialog open={dialogOpen} sx={{ p: 4 }}>
            <DialogTitle>
              Thanks for getting in touch!{' '}
              <IconButton
                aria-label="close"
                onClick={() => setDialogOpen(false)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'text.primary',
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              We'll get back to you as soon as possible.
            </DialogContent>
          </Dialog>
          <Typography
            textAlign="center"
            variant="h3"
            color="text.primary"
            gutterBottom
            sx={{
              fontWeight: '400',
              letterSpacing: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            textAlign="center"
            variant="body1"
            color="text.primary"
            gutterBottom
            sx={{
              fontWeight: '400',
              letterSpacing: 2,
            }}
          >
            Do you have any questions about our spa or any of the treatments?
          </Typography>
          <Typography
            textAlign="center"
            variant="body1"
            color="text.primary"
            gutterBottom
            sx={{
              fontWeight: '400',
              letterSpacing: 2,
            }}
          >
            Use the contact form below and we'll get back to you as quickly as
            possible.
          </Typography>
        </Container>
        <Container maxWidth="md" sx={{ my: 5 }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ '& .MuiInputLabel-formControl': { color: 'text.primary' } }}
          >
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              required
              margin="normal"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              sx={{
                mr: 3,
                width: '50ch',
              }}
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              required
              margin="normal"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              sx={{
                ml: 3,
                width: '50ch',
              }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              required
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              required
              // multiline
              rows={4}
              margin="normal"
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button
              size="small"
              variant="contained"
              onClick={(e) => handleSubmit(e)}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
      <Contact
        title={mockContactProps.base.title}
        subTitle={mockContactProps.base.subTitle}
        street={mockContactProps.base.street}
        city={mockContactProps.base.city}
        phone={mockContactProps.base.phone}
        email={mockContactProps.base.email}
        buttonText={mockContactProps.base.buttonText}
      />
    </>
  );
};

export default ContactPage;

ContactPage.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
