import styled from 'styled-components';
import { mainText, primaryBackground } from 'styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  a > .btn {
    padding: 15px 40px;
    color: ${mainText};
    border: 1px solid #fff;
    border-radius: 5px;
    background: ${primaryBackground};
    cursor: pointer;
  }
`;
