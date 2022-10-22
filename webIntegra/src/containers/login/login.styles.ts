import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;
  align-items: center;

  height: 100vh;

  background-color: ${({ theme }) => theme.palette.background.default};
`;
