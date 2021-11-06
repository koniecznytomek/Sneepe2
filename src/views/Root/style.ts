import styled from 'styled-components';
import { primaryBackground } from 'styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${primaryBackground};
`;

export const TitleBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  -webkit-user-select: none;
  -webkit-app-region: drag;
`;
