import { Typography } from '@mui/material';
import { LoginContainer } from './login.styles';

const Login = () => {
  return (
    <LoginContainer>
      <Typography variant="h4" fontWeight={700}>
        Data Integra Finance
      </Typography>
      <Typography variant="subtitle1">Faça login e começe a usar</Typography>
    </LoginContainer>
  );
};

export default Login;