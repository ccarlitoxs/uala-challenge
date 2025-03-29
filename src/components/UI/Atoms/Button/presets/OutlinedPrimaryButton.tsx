import styled from 'styled-components';
import { Button } from '../Button';

export const OutlinedPrimaryButton = styled(Button)`
    background: transparent;
    color: var(--primary);
    border-radius: 999px;
    border: 1px solid var(--primary);

    &:hover {
        color: var(--light);
        background: var(--primary-hover);
    }
`;
