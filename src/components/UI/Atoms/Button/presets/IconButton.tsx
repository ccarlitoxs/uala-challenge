import styled from 'styled-components';
import { Button } from '../Button';

export const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 0.4rem;
  }
`;
