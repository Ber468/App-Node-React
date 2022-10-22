import { TextField, Typography } from '@mui/material';
import { CurrencyCircleDollar } from 'phosphor-react';
import { Form, Header, LoginContainer } from './login.styles';

const Login = () => {
  return (
    <LoginContainer>
      <Header>
      <CurrencyCircleDollar size={64} />
      <div>
      <Typography variant="h4" fontWeight={700}>
        Data Integra Finance
      </Typography>
      <Typography variant="subtitle1">Faça login e começe a usar</Typography>
      </div>
      </Header>
      <Form>
        <TextField label="Email" />
        <TextField label="Senha" />
      </Form>
    </LoginContainer>
  );
};

export default Login;