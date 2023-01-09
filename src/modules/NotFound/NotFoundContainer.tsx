import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { Wrappper, Title } from 'modules/NotFound/NotFoundContainer.styled';
import { ROUTES } from 'common/routes/routes';

const NotFoundContainer: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(ROUTES.HOME), 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container maxWidth="xl">
      <Wrappper>
        <Title variant="h2">Sorry, this page does not exist</Title>
        <Typography variant="body1">
          You will be redirected to home page in 5 seconds
        </Typography>
      </Wrappper>
    </Container>
  );
};

export default NotFoundContainer;
