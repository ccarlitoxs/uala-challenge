import styled from 'styled-components';
import { Button } from '../Button';

export const TextPrimaryButton = styled(Button)`
   background: transparent;
   color: var(--primary);

   &:hover {
      background: var(--primary-hover);
      color: var(--text-secondary);
   }
`;
