import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { Wrappper, Title } from 'modules/NotFound/NotFoundContainer.styled';
import { ROUTES } from 'types/enum';

const NotFoundContainer: FC = () => {
  const [counter, setCounter] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (!counter) navigate(ROUTES.HOME);

    timer = setTimeout(() => setCounter(counter - 1), 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [navigate, counter]);

  return (
    <Container maxWidth="xl">
      <Wrappper>
        <Title variant="h2">Sorry, this page does not exist</Title>
        <Typography variant="body1">
          You will be redirected to home page in{' '}
          <Typography variant="h3" component="span">
            {counter}
          </Typography>{' '}
          seconds
        </Typography>
      </Wrappper>
    </Container>
  );
};

export default NotFoundContainer;
