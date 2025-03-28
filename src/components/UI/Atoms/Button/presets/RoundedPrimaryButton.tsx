import styled from 'styled-components';
import { Button } from '../Button';

export const RoundedPrimaryButton = styled(Button)`
   background: var(--primary);
   color: white;
   border-radius: 999px;
   &:hover {
      background: var(--primary-hover);
   }
`;
